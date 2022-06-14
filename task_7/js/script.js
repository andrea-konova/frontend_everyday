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
  header = document.querySelector('.header');

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

const playAudio = (playNum) => {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.setAttribute('muted', '');
  audio.play();
}

// типо функция показа временной зоны, нужно доделать
const showTimeZone = () => {
  const offsetInHours = dayjs().utcOffset() / 60;

  const localTimeZoneTown = dayjs.tz.guess(),
    timeZoneTown = localTimeZoneTown.split("/").pop();

  let localTimeZone;

  switch (offsetInHours) {
    case 0:
      localTimeZone = 'GMT';
      break;
    case 1:
      localTimeZone = 'CET';
      break;
    case 2:
      localTimeZone = 'EET';
      break;
    case 3:
      localTimeZone = 'MSK';
      break;
    case 4:
      localTimeZone = 'UTC+4';
      break;
    case 5:
      localTimeZone = 'UTC+5';
      break;
    case 6:
      localTimeZone = 'UTC+6';
      break;
    case 7:
      localTimeZone = 'UTC+7';
      break;
    case 8:
      localTimeZone = 'AWST';
      break;
    case 9:
      localTimeZone = 'UTC+9';
      break;
    case 10:
      localTimeZone = 'AEST';
      break;
    case 11:
      localTimeZone = 'UTC+11';
      break;
    case 12:
      localTimeZone = 'UTC+12';
      break;
    case -1:
      localTimeZone = 'UTC−1';
      break;
    case -2:
      localTimeZone = 'UTC−2';
      break;
    case -3:
      localTimeZone = 'UTC−3';
      break;
    case -4:
      localTimeZone = 'AST';
      break;
    case -5:
      localTimeZone = 'EST';
      break;
    case -6:
      localTimeZone = 'CST';
      break;
    case -7:
      localTimeZone = 'MST';
      break;
    case -8:
      localTimeZone = 'PST';
      break;
    case -9:
      localTimeZone = 'AKST';
      break;
    case -10:
      localTimeZone = 'HAST';
      break;
    case -11:
      localTimeZone = 'SST';
      break;
    case -12:
      localTimeZone = 'UTC−12';
      break;
    default:
      break;
  }

  timeZone.textContent = localTimeZone;
  city.textContent = timeZoneTown;
}

// вызов функций
showTime();
showTimeZone();
getFooterData();
getQuotes();

// слушиватели событий
changeQuote.addEventListener('click', getQuotes);

toggleButton.addEventListener('click', () => {
  toggleFooter();
  changeToggleButton();
})

// audio.addEventListener("ended", () => {
//   if (playNum === playList.length - 1) {
//     playNum = 0;
//   } else {
//     playNum++;
//   }

//   playAudio(playNum);
// });