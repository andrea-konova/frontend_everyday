// импорт файлов
import playList from './playList.js';

//  обьявление переменных
const body = document.querySelector('body'),
  time = document.querySelector('.time'),
  timeZone = document.querySelector('.time-block__zone'),
  timeZoneTown = document.getElementById('timezone'),
  city = document.querySelector('.city'),
  dayOfTheWeek = document.getElementById('day-week'),
  dayOfTheYear = document.getElementById('day-year'),
  weekNumber = document.getElementById('week-number'),
  greetingDate = document.querySelector('.greeting__date'),
  greetingIcon = document.querySelector('.greeting__icon'),
  changeQuote = document.querySelector('.quote__change-button'),
  quote = document.querySelector('.quote__description'),
  quoteAuthor = document.querySelector('.quote__author'),
  toggleButton = document.querySelector('.toggle-button'),
  footer = document.querySelector('.footer'),
  header = document.querySelector('.header'),
  audioDeception = document.querySelector('.audio-deception');

dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);
dayjs.extend(window.dayjs_plugin_weekday);
dayjs.extend(window.dayjs_plugin_dayOfYear);
dayjs.extend(window.dayjs_plugin_isoWeek);

let buttonOn = false,
  playNum = 0,
  isPlay = true;

// функция показа времени и вызова других функций
const showTime = () => {
  const date = dayjs().format('HH:mm');

  showGreeting();
  changeBg();
  time.textContent = date;
  setTimeout(showTime, 1000);
}

// функция получения данных футера
const getFooterData = () => {
  timeZoneTown.textContent = dayjs.tz.guess();
  dayOfTheWeek.textContent = dayjs().weekday();
  dayOfTheYear.textContent = dayjs().dayOfYear();
  weekNumber.textContent = dayjs().isoWeek();
}

// функция показать/скрыть футер
const toggleFooter = () => {
  footer.classList.toggle('_hidden');
  header.classList.toggle('_hidden');
}

// функция изменить кнопку more
const changeToggleButton = () => {
  if (!buttonOn) {
    toggleButton.textContent = 'less';
    toggleButton.classList.add('_active');
    buttonOn = true;
  } else {
    toggleButton.textContent = 'more';
    toggleButton.classList.remove('_active');
    buttonOn = false;
  }
}

// функция выбора времени дня
const getTimeOfDay = () => {
  const hours = dayjs().hour();
  if (hours >= 6 && hours < 10) {
    return 'morning';
  } else if (hours >= 10 && hours < 16) {
    return 'day';
  } else if (hours >= 16 && hours < 22) {
    return 'evening';
  } else {
    return 'night';
  }
}

// функция вывода приветствия
const showGreeting = () => {
  const timeOfDay = getTimeOfDay();

  greetingDate.textContent =  timeOfDay;
}

// функция сменить фоновое изображение
const changeBg = () => {
  const timeOfDay = getTimeOfDay();

  if (timeOfDay === 'morning' || timeOfDay === 'day') {
    body.style.backgroundImage = `url('./image/img/bg-1.jpg')`;
    greetingIcon.style.backgroundImage = `url('./image/svg/sun.svg')`;
  } else {
    body.style.backgroundImage = "url('./image/img/bg-2.jpg')";
    greetingIcon.style.backgroundImage = `url('./image/svg/moon.svg')`;
  }
}

// функция получить рандомное число
const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// цитата дня
async function getQuotes() {
  const quotes = './data/quotes.json';
  const res = await fetch(quotes);
  const data = await res.json();
  let quoteNumber = getRandomNum(0, data.length - 1);
  quote.textContent = data[quoteNumber].text;
  quoteAuthor.textContent = data[quoteNumber].author;
}

// audio player
const audio = new Audio();
audio.muted = true;

const playAudio = (playNum) => {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.muted = false;
  audio.play();
}

// функция показа временной зоны и гороа
const showTimeZone = () => {
  const offsetInHours = dayjs().utcOffset() / 60;

  const localTimeZoneTown = dayjs.tz.guess(),
    timeZoneTown = localTimeZoneTown.split("/").pop();

  let localTimeZone;

  if (offsetInHours > 0) {
    localTimeZone = '+';
  } else if (offsetInHours < 0){
    localTimeZone = '-';
  }

  timeZone.textContent = `UTC ${localTimeZone}${offsetInHours}`;
  city.textContent = timeZoneTown;
}

// обмануть браузер
const trickTheBrowser = () => {
  setTimeout(() => {
    audioDeception.click();
  }, 2000);
}

// вызов функций
showTime();
showTimeZone();
getFooterData();
getQuotes();

// слушиватели событий
changeQuote.addEventListener('click', getQuotes);
audioDeception.addEventListener('click', () => {
  playAudio(playNum)
})

toggleButton.addEventListener('click', () => {
  toggleFooter();
  changeToggleButton();
})

audio.addEventListener("ended", () => {
  if (playNum === playList.length - 1) {
    playNum = 0;
  } else {
    playNum++;
  }

  playAudio(playNum);
});


// window.onload = () => {
//   trickTheBrowser();
// };