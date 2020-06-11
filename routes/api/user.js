var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
const User = require("../../models/User");
const passport = require("passport");
// process register attempt
router.post("/register", (req, res) => {
  const ans = req.body;
  let errors = [];

  console.log(ans);
  // Check required fields
  if (
    !ans.fname ||
    !ans.lname ||
    !ans.email ||
    !ans.password ||
    !ans.password2
  ) {
    errors.push("Please fill in all fields.");
  }

  // Check passwords math
  if (ans.password !== ans.password2) {
    errors.push("Passwords do not match.");
  }

  // Do other required checks ie casing length etc

  // add new user
  // log them in
  // get auth tokens, etc
  if (errors.length > 0) {
    res.json({
      errors,
      fname: ans.fname,
      lname: ans.lname,
      email: ans.email,
      password: ans.password,
      password2: ans.password2,
    });
    console.log("User failed to be registered.");
  } else {
    // check if user already exists in the database
    User.findOne({ email: ans.email }).then((user) => {
      console.log(user === null);
      if (user !== null) {
        errors.push("Email already in use.");
        res.json({
          errors,
          fname: ans.fname,
          lname: ans.lname,
          email: ans.email,
          password: ans.password,
          password2: ans.password2,
        });
      } else {
        // create new user
        const newUser = new User({
          fname: ans.fname,
          lname: ans.lname,
          email: ans.email,
          password: ans.password,
          information: {
            name: fname,
            address: "",
            phone: "",
          },
        });

        // hash password with Bcrypt
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            // set password to hashed
            newUser.password = hash;
            // save user
            newUser
              .save()
              .then((user) => {
                res.json({ errors: "none" });
              })
              .catch((err) => {
                console.log(err);
                res.json({
                  errors: "Failed to add new user. PLease try again",
                  error,
                });
              });
          })
        );
        console.log("user registered");
      }
    });
  }
});

// process login attempt
router.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, function (
    err,
    user,
    info
  ) {
    if (err) {
      console.log("Found unexpectederror");
      return next(err);
    }
    if (!user) {
      console.log("found error");
      return res.status(401).json(info);
    } else {
      console.log("logged in", req.user);
      console.log(user.information);
      res.send({ msg: "success", information: user.information });
    }
  })(req, res, next);
});
module.exports = router;
