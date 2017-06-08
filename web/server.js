'use strict';
var os = require("os");
var fs = require('fs')
    , https = require('https')
    , http = require('http')
    , express = require('express')
    , morgan = require('morgan');

// App
const app = express();
var cookieParser = require('cookie-parser')
app.enable('trust_proxy');

app.use(morgan('combined'));
app.use(cookieParser());

function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

app.all('/health', function (req, res) {
  var latency = randomIntInc(100,600);
  var message = process.env.APPSERVER + ' reporting for duty! Induced latency: ' + latency;

  console.log(message);
  setTimeout(function() {res.send(message);}, latency);
});

app.all('/', function (req, res) {
  console.log("Cookies received: " + JSON.stringify(req.cookies));
  res.cookie('cookieName', 'web2' , { maxAge: 900000, httpOnly: true });
  setTimeout(function() {res.send('Salut coitze from: ' + os.hostname() + "    " + process.env.APPSERVER + '   '  + req.protocol + '\nReq: ' + JSON.stringify(req.cookies) + '\n\nRes: ' + JSON.stringify(res.cookies)) + '\n\n'}, 
  process.env.DELAY);
});

app.all('/', function (req, res) {
  var message = 'Hello from : ' + os.hostname() + "    " + process.env.APPSERVER + '   '  + req.protocol;
  // console.log(message);
  res.cookie('cookieName', 'web2' , { maxAge: 900000, httpOnly: true });
  res.status(200);
  res.send(message);
});

http.createServer(app).listen(8080);
console.log('Running on http://localhost:' + "8080 as " + process.env.APPSERVER );
