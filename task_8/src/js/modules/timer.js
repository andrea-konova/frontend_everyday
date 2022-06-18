export const timer = () => {

  // const из документа
  const timer = document.querySelector('.timer__counter'),
    buttonPomodoro = document.getElementById('button-1'),
    buttonShort = document.getElementById('button-2'),
    buttonLong = document.getElementById('button-3'),
    timerPathRemaining = document.querySelector('.timer__path-remaining');

  // const для режимов работы таймера
  const POMODORO = 1200,
    SHORT_BREAK = 300,
    LONG_BREAK = 900,
    FULL_DASH_ARRAY = 283;

  // переменные для функций
  let timePassed = 0,
    TIME_LIMIT = POMODORO,
    timeLeft,
    timerInterval = null;



  // функция показать сколько осталось времени
  const howTimeLeft = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  // функция рвсчета доли начального времени
  const calculateTimeFraction = () => {
    const rawTimeFraction = timeLeft / TIME_LIMIT;

    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  // функция обновления значение свойства dasharray, начиная с 283
  const setCircleDasharray = () => {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;

    timerPathRemaining.setAttribute("stroke-dasharray", circleDasharray);
  }

  // функция очистить интервал
  const onTimesUp = () => {
    clearInterval(timerInterval);
  }

  // функция запуска таймера
  const startTimer = () =>{
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;

      timer.textContent = howTimeLeft(timeLeft);
      setCircleDasharray();

      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  }

  startTimer();

  // слушатели событий

  // нужно будет красиво переписать
  buttonPomodoro.addEventListener('click', () => {
    TIME_LIMIT = POMODORO;
    timePassed = 0;
  })

  buttonShort.addEventListener('click', () => {
    TIME_LIMIT = SHORT_BREAK;
    timePassed = 0;
  })

  buttonLong.addEventListener('click', () => {
    TIME_LIMIT = LONG_BREAK;
    timePassed = 0;
  })
  //

}