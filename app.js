var http    = require('http');
var path    = require('path');
var express = require('express');

var app     = express();
var server  = app.listen(process.env.PORT || 8000);
var io      = require('socket.io').listen(server);

app.use(express.logger());
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function (req, res) {
	res.redirect('/index.html');
});
