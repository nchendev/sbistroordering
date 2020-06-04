const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// set up env variable
var dotenv = require('dotenv').config();

// load front end
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Twilio API Routes
app.use('/api/sms', require('./routes/api/sms'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
