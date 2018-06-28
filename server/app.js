var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var validate = require('express-jsonschema').validate;

var index = require('./routes/index');
var api = require('./routes/api');
var excelReader = require('./routes/excelReader')
var graphqlroutes = require('./routes/graphqlroutes');

var app = express();


app.use(function(err, req, res, next) {
 
  var responseData;

  if (err.name === 'JsonSchemaValidation') {
      // Log the error however you please 
      console.log(err.message);
      // logs "express-jsonschema: Invalid data found" 

      // Set a bad request http response status or whatever you want 
      res.status(400);

      // Format the response body however you want 
      responseData = {
         statusText: 'Bad Request',
         jsonSchemaValidation: true,
         validations: err.validations  // All of your validation information 
      };

      // Take into account the content type if your app serves various content types 
   
          res.json(responseData);

      // pass error to next error middleware handler 
      next(err);
  }
 });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', api);
app.use('/readexcel', excelReader);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
