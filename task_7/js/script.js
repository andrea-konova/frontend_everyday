const body = document.querySelector('body'),
  time = document.querySelector('.time'),
  timeZone = document.querySelector('.time-block__zone'),
  timeZoneTown = document.getElementById('timezone'),
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

let buttonOn = false;

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
const togleFooter = () => {
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

// типо функция показа временной зоны, нужно доделать
const showTimeZone = () => {
  const date = new Date();
  const offset = date.getTimezoneOffset() / 60;

  let localTimeZone;
  // const localTimeZoneTown = dayjs.tz.guess();

  switch (offset) {
    case 0:
      localTimeZone = GMT;
      localTimeZoneTown = Europe/London;
      break;
    case 1:
      localTimeZone = CET;
      localTimeZoneTown = Europe/Berlin;
      break;
    case 2:
      localTimeZone = EET;
      localTimeZoneTown = Europe/Berlin;
      break;
    default:
      // alert( "Нет таких значений" );
      break;
  }

  timeZone.textContent = localTimeZone;
}

// вызов функций
showTime();
// showTimeZone();
getFooterData();
getQuotes();

// слушиватели событий
changeQuote.addEventListener('click', getQuotes);
toggleButton.addEventListener('click', () => {
  togleFooter();
  changeToggleButton();
})