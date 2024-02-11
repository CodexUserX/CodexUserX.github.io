const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

noButton.addEventListener('click', () => {
	noButton.style.position = 'absolute';
	noButton.style.left = Math.random() * window.innerWidth + 'px';
	noButton.style.top = Math.random() * window.innerHeight + 'px';
});

yesButton.addEventListener('click', () => {
	window.location.href = 'iloveyou.html';
});