export const timer = () => {

  // const из документа
  const timer = document.querySelector('.timer__counter'),
    buttonsBlock = document.querySelector('.buttons__block'),
    timerPathRemaining = document.querySelector('.timer__path-remaining'),
    timerButton = document.querySelector('.timer__button');

  // const для режимов работы таймера
  const POMODORO = 1200,
    SHORT_BREAK = 300, // 300
    LONG_BREAK = 900,
    FULL_DASH_ARRAY = 283;

  // переменные для функций
  let timePassed = 0,
    TIME_LIMIT = POMODORO,
    timeLeft,
    timerInterval = null,
    countDown = false;



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
    countDown = false;
    timerButton.textContent = 'start';
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
        soundBell();
        timerButton.textContent = 'restart';
        timePassed = 0;
      }
    }, 1000);
  }

  // функция изменнения начального времени таймера
  const toggleTimerTime = (limit) => {
    TIME_LIMIT = limit;
    timer.textContent = howTimeLeft(TIME_LIMIT);
    timePassed = 0;
  }

  // start/pause timer
  const toggleTimerButton = () => {
    if (!countDown) {
      startTimer();
      countDown = true;
      timerButton.textContent = 'pause';
    } else {
      onTimesUp();
    }
  }

  // звук таймера
  const soundBell = () => {
    let audio = new Audio();
    audio.src = '../../files/timer-bell.mp3';
    audio.autoplay = true;
  }

  // звук клика
  const soundClick = () => {
    let audio = new Audio();
    audio.src = '../../files/mouse_click_06.wav';
    audio.autoplay = true;
  }

  const timerOperationMode = (limit) => {
    toggleTimerTime(limit);
    onTimesUp();
    timerButton.textContent = 'start';
    countDown = false;
  }

  // вызов функций
  timer.textContent = howTimeLeft(TIME_LIMIT);

  // слушатели событий
  buttonsBlock.addEventListener('click', (e) => {
    let target = e.target;

    if (target.closest('#button-1')) {
      soundClick();
      timerOperationMode(POMODORO);
    } else if (target.closest('#button-2')) {
      soundClick();
      timerOperationMode(SHORT_BREAK);
    } else if (target.closest('#button-3')) {
      soundClick();
      timerOperationMode(LONG_BREAK);
    }
  })

  timerButton.addEventListener('click', () => {
    soundClick();
    toggleTimerButton();
  })
}