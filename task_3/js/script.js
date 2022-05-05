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

const chooseProperty = () => {

  const chooseBuyProperty = () => {
    const buyLocation = document.getElementById('buy-location'),
      buyPropertyType = document.getElementById('buy-property-type'),
      buyPrice = document.getElementById('buy-price');

    const buyLocationValue = document.getElementById('buy-location-value'),
      buyPropertyTypeValue = document.getElementById('buy-property-value'),
      buyPriceValue = document.getElementById('buy-price-value');

    buyLocation.addEventListener('change', () => {
      buyLocationValue.textContent = buyLocation.value;
    })

    buyPropertyType.addEventListener('change', () => {
      buyPropertyTypeValue.textContent = buyPropertyType.value;
    })

    buyPrice.addEventListener('change', () => {
      buyPriceValue.textContent = buyPrice.value;
    })
  }

  const chooseRentProperty = () => {
    const rentLocation = document.getElementById('rent-location'),
      rentPropertyType = document.getElementById('rent-property-type'),
      rentPrice = document.getElementById('rent-price');

    const rentLocationValue = document.getElementById('rent-location-value'),
      rentPropertyTypeValue = document.getElementById('rent-property-value'),
      rentPriceValue = document.getElementById('rent-price-value');

    rentLocation.addEventListener('change', () => {
      rentLocationValue.textContent = rentLocation.value;
    })

    rentPropertyType.addEventListener('change', () => {
      rentPropertyTypeValue.textContent = rentPropertyType.value;
    })

    rentPrice.addEventListener('change', () => {
      rentPriceValue.textContent = rentPrice.value;
    })
  }

  const chooseSellProperty = () => {
    const sellLocation = document.getElementById('sell-location'),
      sellPropertyType = document.getElementById('sell-property-type'),
      sellPrice = document.getElementById('sell-price');

    const sellLocationValue = document.getElementById('sell-location-value'),
      sellPropertyTypeValue = document.getElementById('sell-property-value'),
      sellPriceValue = document.getElementById('sell-price-value');

    sellLocation.addEventListener('change', () => {
      sellLocationValue.textContent = sellLocation.value;
    })

    sellPropertyType.addEventListener('change', () => {
      sellPropertyTypeValue.textContent = sellPropertyType.value;
    })

    sellPrice.addEventListener('change', () => {
      sellPriceValue.textContent = sellPrice.value;
    })
  }

  chooseBuyProperty();
  chooseRentProperty();
  chooseSellProperty();

};

chooseProperty();

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