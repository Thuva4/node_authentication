var express= require('express');
var app = express();
var port=process.env.PORT||8080;
var mangoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieparser = require('cookie-parser');
var bodyparser = require('body-parser');
var session = require('express-session');


var configDB = require('./config/database.js');

mangoose.connect(configDB.url);

app.use(morgan('dev'));

app.use(cookieparser());

app.use(bodyparser());

app.set('view engine', 'ejs');

app.use(session({secret:'sdfghjngbufighfkjghfds'}));
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

require('./app/routes.js')(app,passport);


app.listen(port);

console.log('Application is running');
