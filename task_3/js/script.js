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

const selectProperties = () => {
  const elSelectLocationBuy = document.getElementsByClassName('js-selectLocationBuy')[0],
    elSelectLocationBuyValue = elSelectLocationBuy.children[0],
    elSelectLocationBuyOptions = elSelectLocationBuy.children[1],
    elSelectLocationBuyTrigger = elSelectLocationBuy.children[2];

  const elSelectPropertyBuy = document.getElementsByClassName('js-selectPropertyBuy')[0],
    elSelectPropertyBuyValue = elSelectPropertyBuy.children[0],
    elSelectPropertyBuyOptions = elSelectPropertyBuy.children[1],
    elSelectPropertyBuyTrigger = elSelectPropertyBuy.children[2];

  const elSelectPriceBuy = document.getElementsByClassName('js-selectPriceBuy')[0],
    elSelectPriceBuyValue = elSelectPriceBuy.children[0],
    elSelectPriceBuyOptions = elSelectPriceBuy.children[1],
    elSelectPriceBuyTrigger = elSelectPriceBuy.children[2];

  const elSelectLocationRent = document.getElementsByClassName('js-selectLocationRent')[0],
    elSelectLocationRentValue = elSelectLocationRent.children[0],
    elSelectLocationRentOptions = elSelectLocationRent.children[1],
    elSelectLocationRentTrigger = elSelectLocationRent.children[2];

  const elSelectPropertyRent = document.getElementsByClassName('js-selectPropertyRent')[0],
    elSelectPropertyRentValue = elSelectPropertyRent.children[0],
    elSelectPropertyRentOptions = elSelectPropertyRent.children[1],
    elSelectPropertyRentTrigger = elSelectPropertyRent.children[2];

  const elSelectPriceRent = document.getElementsByClassName("js-selectPriceRent")[0],
    elSelectPriceRentValue = elSelectPriceRent.children[0],
    elSelectPriceRentOptions = elSelectPriceRent.children[1],
    elSelectPriceRentTrigger = elSelectPriceRent.children[2];

  const elSelectLocationSell = document.getElementsByClassName('js-selectLocationSell')[0],
    elSelectLocationSellValue = elSelectLocationSell.children[0],
    elSelectLocationSellOptions = elSelectLocationSell.children[1],
    elSelectLocationSellTrigger = elSelectLocationSell.children[2];

  const elSelectPropertySell = document.getElementsByClassName('js-selectPropertySell')[0],
    elSelectPropertySellValue = elSelectPropertySell.children[0],
    elSelectPropertySellOptions = elSelectPropertySell.children[1],
    elSelectPropertySellTrigger = elSelectPropertySell.children[2];

  const elSelectPriceSell = document.getElementsByClassName("js-selectPriceSell")[0],
    elSelectPriceSellValue = elSelectPriceSell.children[0],
    elSelectPriceSellOptions = elSelectPriceSell.children[1],
    elSelectPriceSellTrigger = elSelectPriceSell.children[2];

  Array.from(elSelectLocationBuyOptions.children).forEach(function (elOption) {
    elOption.addEventListener('click', (e) => {
      elSelectLocationBuyTrigger.textContent = e.target.textContent;
      elSelectLocationBuy.classList.remove('isActive');
    });
  });

  elSelectLocationBuyValue.addEventListener('click', (e) => {
    elSelectLocationBuy.classList.toggle('isActive');
  });

  document.addEventListener('click', (e) => {
    const didClickedOutside = !elSelectLocationBuy.contains(e.target);
    if (didClickedOutside) {
      elSelectLocationBuy.classList.remove('isActive');
    }
  });

  Array.from(elSelectPropertyBuyOptions.children).forEach(function (elOption) {
    elOption.addEventListener('click', (e) => {
      elSelectPropertyBuyTrigger.textContent = e.target.textContent;
      elSelectPropertyBuy.classList.remove('isActive');
    });
  });

  elSelectPropertyBuyValue.addEventListener('click', (e) => {
    elSelectPropertyBuy.classList.toggle('isActive');
  });

  document.addEventListener('click', (e) => {
    const didClickedOutside = !elSelectPropertyBuy.contains(e.target);
    if (didClickedOutside) {
      elSelectPropertyBuy.classList.remove('isActive');
    }
  });

  Array.from(elSelectPriceBuyOptions.children).forEach(function (elOption) {
    elOption.addEventListener('click', (e) => {
      elSelectPriceBuyTrigger.textContent = e.target.textContent;
      elSelectPriceBuy.classList.remove('isActive');
    });
  });

  elSelectPriceBuyValue.addEventListener('click', (e) => {
    elSelectPriceBuy.classList.toggle('isActive');
  });

  document.addEventListener('click', (e) => {
    const didClickedOutside = !elSelectPriceBuy.contains(e.target);
    if (didClickedOutside) {
      elSelectPriceBuy.classList.remove('isActive');
    }
  });

  Array.from(elSelectLocationRentOptions.children).forEach(function (elOption) {
    elOption.addEventListener('click', (e) => {
      elSelectLocationRentTrigger.textContent = e.target.textContent;
      elSelectLocationRent.classList.remove('isActive');
    });
  });

  elSelectLocationRentValue.addEventListener('click', (e) => {
    elSelectLocationRent.classList.toggle('isActive');
  });

  document.addEventListener('click', (e) => {
    const didClickedOutside = !elSelectLocationRent.contains(e.target);
    if (didClickedOutside) {
      elSelectLocationRent.classList.remove('isActive');
    }
  });

  Array.from(elSelectPropertyRentOptions.children).forEach(function (elOption) {
    elOption.addEventListener('click', (e) => {
      elSelectPropertyRentTrigger.textContent = e.target.textContent;
      elSelectPropertyRent.classList.remove('isActive');
    });
  });

  elSelectPropertyRentValue.addEventListener('click', (e) => {
    elSelectPropertyRent.classList.toggle('isActive');
  });

  document.addEventListener('click', (e) => {
    const didClickedOutside = !elSelectPropertyRent.contains(e.target);
    if (didClickedOutside) {
      elSelectPropertyRent.classList.remove('isActive');
    }
  });

  Array.from(elSelectPriceRentOptions.children).forEach(function (elOption) {
    elOption.addEventListener('click', (e) => {
      elSelectPriceRentTrigger.textContent = e.target.textContent;
      elSelectPriceRent.classList.remove('isActive');
    });
  });

  elSelectPriceRentValue.addEventListener('click', (e) => {
    elSelectPriceRent.classList.toggle('isActive');
  });

  document.addEventListener('click', (e) => {
    const didClickedOutside = !elSelectPriceRent.contains(e.target);
    if (didClickedOutside) {
      elSelectPriceRent.classList.remove('isActive');
    }
  });

  Array.from(elSelectLocationSellOptions.children).forEach(function (elOption) {
    elOption.addEventListener('click', (e) => {
      elSelectLocationSellTrigger.textContent = e.target.textContent;
      elSelectLocationSell.classList.remove('isActive');
    });
  });

  elSelectLocationSellValue.addEventListener('click', (e) => {
    elSelectLocationSell.classList.toggle('isActive');
  });

  document.addEventListener('click', (e) => {
    const didClickedOutside = !elSelectLocationSell.contains(e.target);
    if (didClickedOutside) {
      elSelectLocationSell.classList.remove('isActive');
    }
  });

  Array.from(elSelectPropertySellOptions.children).forEach(function (elOption) {
    elOption.addEventListener('click', (e) => {
      elSelectPropertySellTrigger.textContent = e.target.textContent;
      elSelectPropertySell.classList.remove('isActive');
    });
  });

  elSelectPropertySellValue.addEventListener('click', (e) => {
    elSelectPropertySell.classList.toggle('isActive');
  });

  document.addEventListener('click', (e) => {
    const didClickedOutside = !elSelectPropertySell.contains(e.target);
    if (didClickedOutside) {
      elSelectPropertySell.classList.remove('isActive');
    }
  });

  Array.from(elSelectPriceSellOptions.children).forEach(function (elOption) {
    elOption.addEventListener('click', (e) => {
      elSelectPriceSellTrigger.textContent = e.target.textContent;
      elSelectPriceSell.classList.remove('isActive');
    });
  });

  elSelectPriceSellValue.addEventListener('click', (e) => {
    elSelectPriceSell.classList.toggle('isActive');
  });

  document.addEventListener('click', (e) => {
    const didClickedOutside = !elSelectPriceSell.contains(e.target);
    if (didClickedOutside) {
      elSelectPriceSell.classList.remove('isActive');
    }
  });
};

selectProperties();