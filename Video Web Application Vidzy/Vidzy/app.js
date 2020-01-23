var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var methodOveride = require('method-override');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');  //similar to monk
var passport = require('passport'); //for authentication 
var LocalStrategy = require('passport-local').Strategy; //local library
var session = require('express-session'); //keep session variables


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var videosRouter = require('./routes/videos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'this-is-a-secret-token' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOveride('_method'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/videos', videosRouter);


// passport config
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// mongoose db connection
mongoose.connect('mongodb://localhost:27017/vidzy');



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;