document.addEventListener('DOMContentLoaded', () => {
  const switchBtn = document.querySelector('.switch-btn');

  switchBtn.addEventListener('click', (e) => {
    switchBtn.classList.toggle('switch-on');
    if (switchBtn.classList.contains('switch-on')) {
      console.log('Annually');
    } else {
      console.log('Monthly');
    }
  })
})