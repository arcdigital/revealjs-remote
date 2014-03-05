$(function () {
	var previous = { h: 0, v: 0 };

var socket = io.connect();

socket.on('swipe-left', function (data) {
	console.log(data);
	if (data.h !== previous.h || data.v !== previous.v)
	Reveal.left();
});
socket.on('swipe-right', function (data) {
	console.log(data);
	if (data.h !== previous.h || data.v !== previous.v)
	Reveal.right();
});
socket.on('swipe-up', function (data) {
	console.log(data);
	if (data.h !== previous.h || data.v !== previous.v)
	Reveal.up();
});
socket.on('swipe-down', function (data) {
	console.log(data);
	if (data.h !== previous.h || data.v !== previous.v)
	Reveal.down();
});

	Reveal.addEventListener('slidechanged', function (event) {
		var next = { h: event.indexh, v: event.indexv };

		if (next.h > previous.h) {
			console.log('swipe-right1');
			socket.emit('swipe-right', next);
		} else if (next.h < previous.h) {
			console.log('swipe-left2');
			socket.emit('swipe-left', next);
		} else if (next.v > previous.v) {
			console.log('swipe-down3');
			socket.emit('swipe-down', next);
		} else if (next.v < previous.v) {
			console.log('swipe-up4');
			socket.emit('swipe-up', next);
		}
		previous = next;
	});

});
