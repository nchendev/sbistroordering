const express = require("express");
const router = express.Router();
const axios = require("axios");

// retrieve environmental variables
const api_key = process.env.GOOGLE_API_KEY;

// constants
const thresholds = [3, 5, 10];
const values = [3, 5, 10];

let dist = "";
let dur = "";

const distancematrix_url =
  "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=1010+w+memorial+road+edmond+OK&destinations=";
const geocoding_url =
  "https://maps.googleapis.com/maps/api/geocode/json?address=";
const key = "&key=" + api_key;

const calcDfee = (dist) => {
  dist = parseFloat(dist.replace(/,/g, ""));
  console.log("pf " + dist);
  let index = 0;
  while (dist > thresholds[index] && index < thresholds.length - 1) index++;
  console.log(index);
  return values[index];
};

router.post("/", (req, res) => {
  // commenting out city and zip bc they make location verification too inaccurate
  const address =
    req.body.address +
    "+" +
    /**req.body.city +
    "+" +**/
    req.body.state;
  /**"+" +
    req.body.zip**/
  let invalid = false;
  // verify address with geocode
  axios.get(geocoding_url + address + key).then((ares) => {
    // if invalid address
    if (ares.data.status === "ZERO_RESULTS") {
      invalid = true;
      console.log("invalid");
    }
    // calculate delivery cost
    axios
      .get(distancematrix_url + address + key)
      .then((ares) => {
        console.log("api reply: " + JSON.stringify(ares.data));
        if (ares.data.status === "OK") {
          dist = ares.data.rows[0].elements[0].distance.text;
          dur = ares.data.rows[0].elements[0].duration.text;
          console.log("dist: " + dist + ", dur: " + dur);
        }
      })
      .catch((err) => {
        console.error(err);
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
              dist: dist,
            });
          } else {
            res.json({ status: "FAILURE" });
          }
        }
      });
  });
});

module.exports = router;
