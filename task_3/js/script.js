const burgerMenu = () => {
	const burgerBtn = document.querySelector('.burger'),
		headerMenu = document.querySelector('.burger-wrap'),
    header = document.querySelector('.header');

  header.addEventListener('click', (e) => {
		if (e.target.matches('.menu__item--link') || e.target.matches('.burger') || e.target.matches('.burger span') || e.target.matches('.login-button')) {
      burgerBtn.classList.toggle('burger--active');
      headerMenu.classList.toggle('burger-wrap-hide');
    }
	});
};

burgerMenu();

const likedProperty = () => {
  const propertyWrap = document.querySelector('.property__wrapper');

    propertyWrap.addEventListener('click', (e) => {
      if (e.target.matches('.card-title__heart')) {
        e.target.classList.toggle('heart-active');
      }
  });
};

likedProperty();

const reviewsSwiper = new Swiper('.reviews-swiper', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});