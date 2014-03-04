$(function () {
	var previous = { h: 0, v: 0 };

	Reveal.addEventListener('slidechanged', function (event) {
		if (event.indexh > previous.h) {
			console.log('swipe-right');
		} else if (event.indexh < previous.h) {
			console.log('swipe-left');
		} else if (event.indexv > previous.v) {
			console.log('swipe-down');
		} else if (event.indexv < previous.v) {
			console.log('swipe-up');
		}
		previous = { h: event.indexh, v: event.indexv };
	});

});
