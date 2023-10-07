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

const displayTimeZoneDay = (data) => {
  //converts timezone offset in seconds to minutes
  const timezoneOffsetMinutes = data.timezone / 60;
  const localTime = dayJsObject.utc().utcOffset(timezoneOffsetMinutes);

  const dayOfWeek = localTime.format("dddd MMM D"); // Format the day of the week

  return dayOfWeek;
};

export { displayCurrentDate, displayCurrentTime, displayTimeZoneDay };
