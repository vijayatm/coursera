(function (window) {
	var helloSpeaker = {};
	helloSpeaker.speaker = "Hello ";

	helloSpeaker.speak = function(names) {
		console.log(helloSpeaker.speaker +names);
	}
	window.helloSpeaker = helloSpeaker;
})(window);