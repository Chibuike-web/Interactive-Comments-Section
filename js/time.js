export function updateDuration(timeOfPost, duration) {
	const now = new Date();
	const diffMs = now - timeOfPost;
	const seconds = Math.floor(diffMs / 1000);
	let timeText = "";
	if (seconds < 60) {
		timeText = seconds + " second" + (seconds !== 1 ? "s" : "") + " ago";
	} else if (seconds < 3600) {
		const minutes = Math.floor(seconds / 60);
		timeText = minutes + " minute" + (minutes !== 1 ? "s" : "") + " ago";
	} else {
		const hours = Math.floor(seconds / 3600);
		timeText = hours + " hour" + (hours !== 1 ? "s" : "") + " ago";
	}
	duration.textContent = timeText;
}
