const burgerMenu = () => {
	const burgerBtn = document.getElementById('burger'),
		headerMenu = document.querySelector('.burger-wrap'),
    header = document.querySelector('.header');

  header.addEventListener('click', (e) => {
		if (e.target.matches(".menu__item--link") || e.target.matches(".burger") || e.target.matches(".login-button")) {
      burgerBtn.classList.toggle("burger--active");
      headerMenu.classList.toggle('burger-wrap-hide');
    }
	});
};

burgerMenu();