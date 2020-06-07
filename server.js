const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const passport = require('passport');

//const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');
//const indexRouter = require('../client');

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = process.env.MONGO_URI;

// Connect to Mongo
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(console.log('MongoDB connected'))
	.catch((err) => console.log(err));
// Express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

// Twilio API Route
app.use('/api/twilio', require('./routes/api/twilio'));

// User API Route (Login, Register)
app.use('/api/user', require('./routes/api/user'));

// Client routing
if (process.env.NODE_ENV === 'production') {
	// set static folder
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
} else {
	// set static folder
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

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
