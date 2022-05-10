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

  const changeSelect = (select, options, trigger) => {
    // Toggle select on label click
    select.classList.toggle('isActive');

    // Listen for each custom option click
    Array.from(options.children).forEach(function (elOption) {
      elOption.addEventListener('click', (e) => {
        // Update custom select text too
        trigger.textContent = e.target.textContent;
        // Close select
        select.classList.remove('isActive');
      });
    });

    // close the custom select when clicking outside.
    document.addEventListener('click', (e) => {
      const didClickedOutside = !select.contains(e.target);
      if (didClickedOutside) {
        select.classList.remove('isActive');
      }
    });
  };

  // buy selects
  elSelectLocationBuyValue.addEventListener('click', () => {
    changeSelect(elSelectLocationBuy, elSelectLocationBuyOptions, elSelectLocationBuyTrigger);
  });

  elSelectPropertyBuyValue.addEventListener('click', () => {
    changeSelect(elSelectPropertyBuy, elSelectPropertyBuyOptions, elSelectPropertyBuyTrigger);
  });

  elSelectPriceBuyValue.addEventListener('click', () => {
    changeSelect(elSelectPriceBuy, elSelectPriceBuyOptions, elSelectPriceBuyTrigger);
  });

  // rent selects
  elSelectLocationRentValue.addEventListener('click', () => {
    changeSelect(elSelectLocationRent, elSelectLocationRentOptions, elSelectLocationRentTrigger);
  });

  elSelectPropertyRentValue.addEventListener('click', () => {
    changeSelect(elSelectPropertyRent, elSelectPropertyRentOptions, elSelectPropertyRentTrigger);
  });

  elSelectPriceRentValue.addEventListener('click', () => {
    changeSelect(elSelectPriceRent, elSelectPriceRentOptions, elSelectPriceRentTrigger);
  });

  // sell selects
  elSelectLocationSellValue.addEventListener('click', () => {
    changeSelect(elSelectLocationSell, elSelectLocationSellOptions, elSelectLocationSellTrigger);
  });

  elSelectPropertySellValue.addEventListener('click', () => {
    changeSelect(elSelectPropertySell, elSelectPropertySellOptions, elSelectPropertySellTrigger);
  });

  elSelectPriceSellValue.addEventListener('click', (e) => {
    changeSelect(elSelectPriceSell, elSelectPriceSellOptions, elSelectPriceSellTrigger);
  });

};

selectProperties();