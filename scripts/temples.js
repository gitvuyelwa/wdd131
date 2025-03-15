const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
ambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

