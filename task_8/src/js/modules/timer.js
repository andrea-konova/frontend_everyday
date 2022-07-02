export const timer = () => {

  // const из документа
  const timer = document.querySelector('.timer__counter'),
    buttonsBlock = document.querySelector('.buttons__block'),
    fontsButtons = document.querySelector('.fonts-buttons'),
    colorButtons = document.querySelector('.color-buttons'),
    timerPathRemaining = document.querySelector('.timer__path-remaining'),
    applyButton = document.querySelector('.popup__button'),
    timerButton = document.querySelector('.timer__button');

  const pomodoro = document.getElementById('pomodoro'),
    shortBreak = document.getElementById('short-break'),
    longBreak = document.getElementById('long-break');

  // const для режимов работы таймера
  let POMODORO = pomodoro.value * 60,
    SHORT_BREAK = shortBreak.value * 60,
    LONG_BREAK = longBreak.value * 60,
    FULL_DASH_ARRAY = 283;

  // переменные для функций
  let timePassed = 0,
    TIME_LIMIT = POMODORO,
    timeLeft,
    timeStorage,
    activeTab = 0,
    activeTabFont = 0,
    activeTabColor = 0,
    timerInterval = null,
    font = 'KumbhSans',
    colorTheme = '#F87070',
    countDown = false;

  // работа с local storage
  const getLocalStorage = () => {
    // шрифт
    if (localStorage.getItem('fontTheme') !== null) {
      font = localStorage.getItem('fontTheme');
    } else {
      font = font;
    }
    changeFont(font);
    // цвет
    if (localStorage.getItem('colorTheme') !== null) {
      colorTheme = localStorage.getItem('colorTheme');
    } else {
      colorTheme = colorTheme;
    }
    changeColor(colorTheme);
    // получение значений из inputов
    // pomodoro время
    if (localStorage.getItem('pomodoro') !== null) {
      pomodoro.value = localStorage.getItem('pomodoro');
    } else {
      pomodoro.value = pomodoro.value;
    }
    // короткий перерыв время
    if (localStorage.getItem('shortBreak') !== null) {
      shortBreak.value = localStorage.getItem('shortBreak');
    } else {
      shortBreak.value = shortBreak.value;
    }
    // длинный перерыв время
    if (localStorage.getItem('longBreak') !== null) {
      longBreak.value = localStorage.getItem('longBreak');
    } else {
      longBreak.value = longBreak.value;
    }
    changeValue();
  }

  // записываю данные в local storage
  const setLocalStorage = () => {
    localStorage.setItem('fontTheme', font);
    localStorage.setItem('colorTheme', colorTheme);
    localStorage.setItem('pomodoro', pomodoro.value);
    localStorage.setItem('shortBreak', shortBreak.value);
    localStorage.setItem('longBreak', longBreak.value);
  }

  // записываю значение timePassed в local storage
  const setTimePassedToLocalStorage = () => {
    localStorage.setItem('timePassed', timePassed);
  }

  // получаю значение timePassed из local storage
  const getTimePassedFromLocalStorage = () => {
    if (localStorage.getItem('timePassed') !== null) {
      timePassed = Number(localStorage.getItem('timePassed'));
    } else {
      timePassed = 0;
    }
  }

  // обновляю значение timePassed
  const updateTimerContent = () => {
    getTimePassedFromLocalStorage();
    timeLeft = TIME_LIMIT - timePassed;
    timeStorage = howTimeLeft(timeLeft);
    timer.textContent = timeStorage;
  }

  // получаю активный таб
  const tabInput = buttonsBlock.querySelectorAll('input');

  const getActiveTab = () => {
    for (let i = 0; i < tabInput.length; i++) {
      if (localStorage.getItem('activeTab') !== null) {
        activeTab = Number(localStorage.getItem('activeTab'));
      } else {
        activeTab = activeTab;
      }
      tabInput[activeTab].checked = true;
    }
  }

  // записываю активный таб
  const setActiveTab = () => {
    for (let i = 0; i < tabInput.length; i++) {
      if (tabInput[i].checked) {
        activeTab = i;
        localStorage.setItem('activeTab', activeTab);
      }
    }
  }

  // получаю активный таб шрифта
  const tabInputFont = fontsButtons.querySelectorAll('input');

  const getActiveTabFont = () => {
    for (let i = 0; i < tabInputFont.length; i++) {
      if (localStorage.getItem('activeTabFont') !== null) {
        activeTabFont = Number(localStorage.getItem('activeTabFont'));
      } else {
        activeTabFont = activeTabFont;
      }
      tabInputFont[activeTabFont].checked = true;
    }
  }

  // записываю активный таб шрифта
  const setActiveTabFont = () => {
    for (let i = 0; i < tabInputFont.length; i++) {
      if (tabInputFont[i].checked) {
        activeTabFont = i;
        localStorage.setItem('activeTabFont', activeTabFont);
      }
    }
  }

  // получаю активный таб цвета
  const tabInputColor = colorButtons.querySelectorAll('input');

  const getActiveTabColor = () => {
    for (let i = 0; i < tabInputColor.length; i++) {
      if (localStorage.getItem('activeTabColor') !== null) {
        activeTabColor = Number(localStorage.getItem('activeTabColor'));
      } else {
        activeTabColor = activeTabColor;
      }
      tabInputColor[activeTabColor].checked = true;
    }
  }

  // записываю активный таб цвета
  const setActiveTabColor = () => {
    for (let i = 0; i < tabInputColor.length; i++) {
      if (tabInputColor[i].checked) {
        activeTabColor = i;
        localStorage.setItem('activeTabColor', activeTabColor);
      }
    }
  }

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
    timeLeft = TIME_LIMIT - timePassed;
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

      timeStorage = howTimeLeft(timeLeft);
      timer.textContent = timeStorage;

      setCircleDasharray();
      setTimePassedToLocalStorage();

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
    if (limit <= 0) {
      alert('Пожалуйства введите время в минутах > 0');
      return
    }
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
    audio.src = './files/timer-bell.mp3';
    audio.autoplay = true;
  }

  // звук клика
  const soundClick = () => {
    let audio = new Audio();
    audio.src = './files/mouse_click_06.wav';
    audio.autoplay = true;
  }

  // переключение режимов таймера
  const timerOperationMode = (limit) => {
    toggleTimerTime(limit);
    onTimesUp();
    timerButton.textContent = 'start';
    countDown = false;
  }

  // изменение значения времени
  const changeValue = () => {
    POMODORO = pomodoro.value * 60;
    SHORT_BREAK = shortBreak.value * 60;
    LONG_BREAK = longBreak.value * 60;
    getActiveTab();

    let item = document.querySelector('input:checked + label.label');

    switch (item.textContent) {
      case 'pomodoro':
        timerOperationMode(POMODORO);
        break;
      case 'short break':
        timerOperationMode(SHORT_BREAK);
        break;
      case 'long break':
        timerOperationMode(LONG_BREAK);
        break;
      default:
        break;
    }
  }

  // изменение шрифта
  const changeFont = (font) => {
    const html = document.querySelector('html');
    html.style.fontFamily = `"${font}", sans-serif`;
  }

  // изменение цвета
  const changeColor = (colorTheme) => {
    let root = document.documentElement;
    root.style.setProperty('--color-1', colorTheme);
  }

  // вызов функций
  timer.textContent = timeStorage;

  // слушатели событий
  buttonsBlock.addEventListener('click', (e) => {
    let target = e.target;
    soundClick();

    if (target.closest('#button-1')) {
      timerOperationMode(POMODORO);
    } else if (target.closest('#button-2')) {
      timerOperationMode(SHORT_BREAK);
    } else if (target.closest('#button-3')) {
      timerOperationMode(LONG_BREAK);
    }

    setActiveTab();
    timePassed = 0;
    setCircleDasharray();
    setTimePassedToLocalStorage();
  })

  fontsButtons.addEventListener('click', (e) => {
    let target = e.target;
    soundClick();

    if (target.closest('#fonts-button-1')) {
      font = 'KumbhSans';
    } else if (target.closest('#fonts-button-2')) {
      font = 'RobotoSlab';
    } else if (target.closest('#fonts-button-3')) {
      font = 'SpaceMono';
    }
  })

  colorButtons.addEventListener('click', (e) => {
    let target = e.target;
    soundClick();

    if (target.closest('#color-button-1')) {
      colorTheme = '#F87070';
    } else if (target.closest('#color-button-2')) {
      colorTheme = '#70F3F8';
    } else if (target.closest('#color-button-3')) {
      colorTheme = '#D881F8';
    }
  })

  timerButton.addEventListener('click', () => {
    soundClick();
    toggleTimerButton();
  })

  applyButton.addEventListener('click', () => {
    soundClick();
    changeValue();
    changeFont(font);
    changeColor(colorTheme);
    setLocalStorage();
    setActiveTabFont();
    setActiveTabColor();
  })

  document.addEventListener('DOMContentLoaded', () => {
    getLocalStorage();
    updateTimerContent();
    getTimePassedFromLocalStorage();
    getActiveTab();
    getActiveTabFont();
    getActiveTabColor();
  })
}