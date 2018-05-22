import githubUsersRouter from './routes/index.js';

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.set('views', __dirname + '/views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', githubUsersRouter);


module.exports = app;
