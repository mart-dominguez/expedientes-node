var http1 = require('http');
var https = require('https');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// parse application/json
app.use(bodyParser.json())

app.use('/', express.static(__dirname + '/public'));
app.use('/lib', express.static(__dirname + '/node_modules'));

app.listen(9999, function () {
  console.log('Example app listening on port 80!');
});