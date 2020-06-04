var express = require('express');
var router = express.Router();

console.log({
	accountSid: process.env.TWILIO_SID,
	authToken: process.env.TWILIO_AUTH,
});

// retrieve environmental variables
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const client = require('twilio')(accountSid, authToken);

const getDateString = () => {
	var today = new Date();
	var dd = today.getDate();

	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();

	var h = today.getHours();
	var m = today.getMinutes();
	if (dd < 10) {
		dd = '0' + dd;
	}

	if (mm < 10) {
		mm = '0' + mm;
	}
	today = mm + '/' + dd + '/' + yyyy + ' ' + h + ':' + m;
	return today;
};

router.get('/', (req, res) => {
	res.send('reached page');
});

router.post('/', (req, res) => {
	console.log('Got response: ' + res.statusCode);
	// get order
	//var order = require('./order');
	var order = req.body;

	// process order
	var body = '';
	if (order.orderOptions.pd === 1) body += 'NEW PICKUP\n';
	else body += 'NEW DELIVERY\n';

	body += getDateString();
	body += '\n\n';
	for (let [key, value] of Object.entries(order.information)) {
		body += key + ': ' + value + '\n';
	}
	body += '\n';
	order.order.map((orderItem) => {
		body +=
			orderItem.amount + 'x ' + orderItem.chinese + '/' + orderItem.english;
		if (orderItem.note !== '') body += '\n\tnote: ' + orderItem.note;
		body += '\n';
	});
	body += '\n';
	for (let [key, value] of Object.entries(order.price)) {
		body += key + ': $' + value + '\n';
	}

	// send message
	console.log('sending message');
	client.messages
		.create({
			body,
			from: process.env.TWILIO_FROM,
			to: process.env.TWILIO_TO,
		})
		.then((message) => console.log('message sent: ' + message.sid));

	// process call content
	var content = 'You have a new ';
	if (order.pd === 1) content += 'PICKUP ';
	else content += 'DELIVERY ';
	content += 'order. Please check your phone or email.';

	// make call
	console.log('creating call');
	client.calls
		.create({
			twiml: '<Response><Say>' + content + '</Say><Hangup/></Response>',
			to: process.env.TWILIO_TO,
			from: process.env.TWILIO_FROM,
		})
		.then((call) => console.log('call made: ' + call.sid));

	// send email

	// send response
	res.json({ msg: 'sending', call: 'making' });
});

module.exports = router;
