const dayJsObject = dayjs();

dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

const currentDate = document.getElementById("currentDate");
const currentTime = document.getElementById("currentTime");

const displayCurrentDate = () => {
  currentDate.textContent = dayJsObject.format("MMM D, YYYY");
};

const displayCurrentTime = () => {
  currentTime.textContent = dayJsObject.format("hh:mm A");
};

const displayTimeZoneDay = (data, index) => {
   // Converts timezone offset in seconds to minutes
  const timezoneOffsetMinutes = data.timezone / 60;
  const localTime = dayJsObject.utc().utcOffset(timezoneOffsetMinutes);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDayIndex = localTime.day(); // Get the index of the current day
  let nextDayIndex = (currentDayIndex + index) % 7; // Calculate the index of the next day
  const dayOfWeek = daysOfWeek[nextDayIndex]; // Get the next day of the week
 
  return dayOfWeek;
};

export {
  displayCurrentDate,
  displayCurrentTime,
  displayTimeZoneDay,
};