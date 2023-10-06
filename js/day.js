const dayJsObject = dayjs();

dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

const currentDate = document.getElementById("currentDate");
const currentTime = document.getElementById("currentTime");

const displayCurrentDate = () => {
  currentDate.textContent = dayJsObject.format("MMM D, YYYY");
};

const displayCurrentTime = () => {
  currentTime.textContent = dayJsObject.format("hh:mm A");
};

const displayTimeZoneDay = () => {
  
};

export { displayCurrentDate, displayCurrentTime };