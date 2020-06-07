var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const User = require('../../models/User');
const passport = require('passport');
// process register attempt
router.post('/register', (req, res) => {
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
		errors.push('Please fill in all fields');
	}

	// Check passwords math
	if (ans.password !== ans.password2) {
		errors.push('passwords do not match');
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
		console.log('user failed to be registered');
	} else {
		// check if user already exists in the database
		User.findOne({ email: ans.email }).then((user) => {
			console.log(user === null);
			if (user !== null) {
				errors.push('User exists. Email already in use!');
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
								res.json({ errors: 'none' });
							})
							.catch((err) => {
								console.log(err);
								res.json({
									errors: 'failed to add new user. PLease try again',
									error,
								});
							});
					})
				);
				console.log('user registered');
			}
		});
	}
});

// process login attempt
router.post('/login', passport.authenticate('local'), (req, res) => {
	console.log('logged in', req.user);
	req.send(user);
});
module.exports = router;
