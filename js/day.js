const dayJsObject = dayjs();
dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

const currentDate = document.getElementById("currentDate");
const currentTime = document.getElementById("currentTime");

//function to display date of current zone
const displayCurrentDate = () => {
  currentDate.textContent = dayJsObject.format("MMM D, YYYY");
};

//function to display time of current zone
const displayCurrentTime = () => {
  currentTime.textContent = dayJsObject.format("hh:mm A");
};

//function to display days of the week for next 5 days of search city
const displayTimeZoneDays = (data, index) => {
   // Converts timezone offset from seconds to minutes
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

//function to display search city day of the week, day and month
const displayTimeZoneDay = (data) => {
  //converts timezone offset in seconds to minutes
  const timezoneOffsetMinutes = data.timezone / 60;
  const localTime = dayJsObject.utc().utcOffset(timezoneOffsetMinutes);

  const dayOfWeek = localTime.format("dddd MMM D"); // Format the day of the week

  return dayOfWeek;
};

export {
  displayCurrentDate,
  displayCurrentTime,
  displayTimeZoneDays,
  displayTimeZoneDay,
};