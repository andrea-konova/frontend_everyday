const time = document.querySelector('.time'),
  timeZone = document.querySelector('.time-block__zone'),
  timeZoneTown = document.getElementById('timezone'),
  dayOfTheWeek = document.getElementById('day-week'),
  dayOfTheYear = document.getElementById('day-year'),
  weekNumber = document.getElementById('week-number');

dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);
dayjs.extend(window.dayjs_plugin_weekday);
dayjs.extend(window.dayjs_plugin_dayOfYear);
dayjs.extend(window.dayjs_plugin_weekOfYear);

console.log(dayjs());

const showTime = () => {
  const date = dayjs().format('HH:mm');

  time.textContent = date;
  setTimeout(showTime, 1000);
}

const showFooterData = () => {
  const currentTimeZone = dayjs.tz.guess(),
    currentDayWeek = dayjs().weekday(),
    currentDayYear = dayjs().dayOfYear(),
    currentWeekNumber = dayjs().week();


  timeZoneTown.textContent = currentTimeZone;
  dayOfTheWeek.textContent = currentDayWeek;
  dayOfTheYear.textContent = currentDayYear;
  weekNumber.textContent = currentWeekNumber;
}

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

showTime();
// showTimeZone();
showFooterData();