const burgerMenu = () => {
	const burgerBtn = document.getElementById('burger'),
		headerMenu = document.querySelector('.navigation'),
    header = document.querySelector('.header');

  header.addEventListener('click', (e) => {
		if (e.target.matches(".menu__item--link") || e.target.matches(".burger")) {
      burgerBtn.classList.toggle("burger--active");
      headerMenu.classList.toggle('navigation-hide');
    }
	});
};

burgerMenu();