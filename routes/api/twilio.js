var express = require("express");
var router = express.Router();

console.log({
  accountSid: process.env.TWILIO_SID,
  authToken: process.env.TWILIO_AUTH,
});

// retrieve environmental variables
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const client = require("twilio")(accountSid, authToken);

const getDateString = () => {
  var today = new Date();
  return today.toLocaleDateString("en-US") + today.toLocaleTimeString("en-US");
};

router.get("/", (req, res) => {
  res.send("reached page");
});

router.post("/", (req, res) => {
  console.log("Got response: " + res.statusCode);
  // get order
  //var order = require('./order');
  var order = req.body;

  // process order
  var body = "";
  // determine if pickup or delivery
  body += getDateString() + "\n";
  if (order.options.pickup) body += "NEW PICKUP\n\n";
  else {
    body += "NEW DELIVERY\n\n";
    body += order.information.address + "\n";
    body +=
      order.information.city +
      ", " +
      order.information.state +
      " " +
      order.information.zip +
      "\n";
    body += "note: " + order.information.driverNotes + "\n\n";
  }

  // contact information
  body +=
    "name: " + order.information.fname + " " + order.information.lname + "\n";
  body += "phone: " + order.information.phone + "\n\n";

  // payment information
  if (order.options.cash) body += "paying with cash\n";
  else {
    body += "paying with card\n";
    body += order.payment.name + "\n";
    body += order.payment.cc + "\n";
    body += order.payment.exp + "\t" + order.payment.cvv + "\n";
  }

  /**for (let [key, value] of Object.entries(order.information)) {
    body += key + ": " + value + "\n";
  }
	body += "\n";**/

  order.order.map((orderItem) => {
    body +=
      orderItem.amount + "x " + orderItem.chinese + "/" + orderItem.english;
    if (orderItem.note !== "") body += "\n\tnote: " + orderItem.note;
    body += "\n";
  });
  body += "\n";
  for (let [key, value] of Object.entries(order.price)) {
    body += key + ": $" + value + "\n";
  }

  // send message
  console.log("sending message");
  client.messages
    .create({
      body,
      from: process.env.TWILIO_FROM,
      to: process.env.TWILIO_TO,
    })
    .then((message) => console.log("message sent: " + message.sid));

  // process call content
  var content = "You have a new ";
  if (order.pd === 1) content += "PICKUP ";
  else content += "DELIVERY ";
  content += "order. Please check your phone or email.";

  // make call
  console.log("creating call");
  client.calls
    .create({
      twiml: "<Response><Say>" + content + "</Say><Hangup/></Response>",
      to: process.env.TWILIO_TO,
      from: process.env.TWILIO_FROM,
    })
    .then((call) => console.log("call made: " + call.sid));

  // send email

  // send response
  res.json({ msg: "success" });
});

module.exports = router;
