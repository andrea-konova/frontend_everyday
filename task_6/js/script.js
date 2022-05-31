document.addEventListener('DOMContentLoaded', () => {
  const switchBtn = document.querySelector('.switch-btn'),
    cardsPriceAmount = document.querySelectorAll('.card__price-amount');

  let percent = 20,
    switchOn = false;

  const updateCardPrice = () => {
    cardsPriceAmount.forEach(cardPriceAmount => {
      let target = cardPriceAmount.getAttribute('data-target');
      let newPrice;

      if (switchOn) {
        newPrice = Math.round((target * 12) * ((100 - percent) / 100));
      } else {
        newPrice = target;
      }
      cardPriceAmount.textContent = newPrice;
    });
  }

  switchBtn.addEventListener('click', () => {
    switchBtn.classList.toggle('switch-on');
    if (switchBtn.classList.contains('switch-on')) {
      switchOn = true;
    } else {
      switchOn = false;
    }
    updateCardPrice();
  })

  updateCardPrice();
})