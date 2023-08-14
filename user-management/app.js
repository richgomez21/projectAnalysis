var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// this will execute the associations.js file
require('./associations'); 
// Sequelize database setup
const sequelize = require('./database');
// Interaction with session
const session = require('express-session');

const SeedController = require('./routes/SeedController');
const UserController = require('./routes/UserController');
const EmployeeController = require('./routes/EmployeeController');

var app = express();

// Session middleware
app.use(
  session({
    secret: 'your_session_secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 3600000 }, // secure: true for HTTPS. Should be true in production. False here only for development.
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync() 
    .then(() => {
        console.log("Database & tables created!");
    });

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/seed', SeedController);
app.use('/user', UserController);
app.use('/employees', EmployeeController);


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
