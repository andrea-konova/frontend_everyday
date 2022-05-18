export const burgerMenu = () => {
	const burgerBtn = document.querySelector('.burger'),
		headerMenu = document.querySelector('.burger-wrap'),
    header = document.querySelector('.header');

  header.addEventListener('click', (e) => {
		if (e.target.matches('.menu__item--link') || e.target.matches('.burger') || e.target.matches('.burger span') || e.target.matches('.logo__img')) {
      burgerBtn.classList.toggle('burger--active');
      headerMenu.classList.toggle('burger-wrap-hide');
    }
	});
};