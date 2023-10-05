const currentDate = document.getElementById("currentDate");
const currentTime = document.getElementById("currentTime");

const dayJsObject = dayjs();

const displayCurrentDate = () => {
currentDate.textContent= dayJsObject.format("MMM D, YYYY")
};

const displayCurrentTime = () => {
  currentTime.textContent = dayJsObject.format("hh:mm A");
};



export { displayCurrentDate, displayCurrentTime };