const express = require("express");
const router = express.Router();
const axios = require("axios");

// retrieve environmental variables
const api_key = process.env.GOOGLE_API_KEY;

// constants
const thresholds = [3, 5, 10];
const values = [3, 5, 10];

const distancematrix_url =
  "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=1010+w+memorial+road+edmond+OK&destinations=";
const geocoding_url =
  "https://maps.googleapis.com/maps/api/geocode/json?address=";
const key = "&key=" + api_key;

const calcDfee = (dist) => {
  dist = parseFloat(dist);
  let index = 0;
  while (dist > thresholds[index] && index < thresholds.size() - 1) index++;
  return values[index];
};

router.post("/", (req, res) => {
  const address =
    req.body.address +
    "+" +
    req.body.city +
    "+" +
    req.body.state +
    "+" +
    req.body.zip;
  let invalid = false;
  // verify address with geocode
  axios
    .get(geocoding_url + address + key)
    .then((res) => {
      // if invalid address
      if (res.data.status === "ZERO_RESULTS") {
        invalid = true;
      }
      // if valid address
      else {
        // calculate delivery cost
        axios
          .get(distancematrix_url + address + key)
          .then((res) => {
            console.log("api reply: " + JSON.stringify(res.data));
            if (res.data.status === "OK") {
              dist = res.data.rows[0].elements[0].distance.text;
              dur = res.data.rows[0].elements[0].duration.text;
              console.log("dist: " + dist + ", dur: " + dur);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    })
    .then(() => {
      // if address invalid
      if (invalid) {
        res.json({ status: "INVALID" });
      }
      // if address valid
      else {
        if (dist !== "" && dur !== "") {
          res.json({
            status: "OK",
            dfee: calcDfee(dist.substr(0, dist.indexOf(" "))),
          });
        } else {
          res.json({ status: "FAILURE" });
        }
      }
    });
});

module.exports = router;
