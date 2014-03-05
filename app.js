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


io.set('loglevel', 10)

io.on('connection', function(socket) {
	console.log('shit worked');

  socket.on('swipe-right', function(data) {
		console.log('right');
		socket.broadcast.emit('swipe-right', data);
	});

	socket.on('swipe-left', function(data) {
		console.log('left');
		socket.broadcast.emit('swipe-left', data);
	});

	socket.on('swipe-up', function(data) {
		console.log('up');
		socket.broadcast.emit('swipe-up', data);
	});

	socket.on('swipe-down', function(data) {
		console.log('down');
		socket.broadcast.emit('swipe-down', data);
	});


	//socket.broadcast.emit('swipe-right');
});
