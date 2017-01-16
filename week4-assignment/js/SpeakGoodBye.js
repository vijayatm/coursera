(function (window) {
	var byeSpeaker = {};
	byeSpeaker.speaker = "Good Bye ";

	byeSpeaker.speak = function(names) {
		console.log(byeSpeaker.speaker +names);
	}
	window.byeSpeaker = byeSpeaker;
})(window);