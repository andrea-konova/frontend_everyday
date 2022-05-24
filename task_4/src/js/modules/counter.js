export const counter = () => {

  const data = document.querySelector('.data');

  const counters = document.querySelectorAll('.number'),
    speed = 100;

  const runCounter = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target'),
          count = +counter.innerText,
          i = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + i);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      }

      updateCount();
    });
  }

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.onscroll = () => {
    let visibility = isElementInViewport(data);

    if (visibility) {
      runCounter();
    }
  }
}