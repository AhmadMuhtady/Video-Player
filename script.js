const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function playPause() {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

function updateIcon() {
	if (video.paused) {
		playBtn.innerHTML = '<i class="fa fa-play fa-2x"></i>';
	} else {
		playBtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
	}
}

function stopVideo() {
	video.pause();
	video.currentTime = 0;
}

function updateProgress() {
	progress.value = (video.currentTime / video.duration) * 100;

	// get minutes
	let minutes = Math.floor(video.currentTime / 60);
	if (minutes < 10) {
		minutes = '0' + String(minutes);
	}

	let seconds = Math.floor(video.currentTime % 60);
	if (seconds < 10) {
		seconds = '0' + String(seconds);
	}

	timestamp.innerHTML = `${minutes}:${seconds}`;
}

function setProgress() {
	video.currentTime = (+progress.value * video.duration) / 100;
}

video.addEventListener('click', playPause);
video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);
video.addEventListener('timeupdate', updateProgress);

playBtn.addEventListener('click', playPause);
stop.addEventListener('click', stopVideo);
progress.addEventListener('click', setProgress);
