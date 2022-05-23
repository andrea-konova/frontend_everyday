export const counter = () => {
  const counters = document.querySelectorAll('.number'),
    speed = 50;

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