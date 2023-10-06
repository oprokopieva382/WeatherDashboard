import { displayCurrentDate, displayCurrentTime } from "./day.js";
import { getFirstSearch, getForecast } from "./restApi.js";

const cityName = document.getElementById("cityName");
const displayDate = document.getElementById("displayDay");
const displayIcon = document.getElementById("displayIcon");
const displayTemp = document.getElementById("displayTemp");
const displayWind = document.getElementById("displayWind");
const displayHumidity = document.getElementById("displayHumidity");
const sky = document.getElementById("sky");



export const displayForecast = (data) => {
  console.log(data);
};

//function to display current day weather condition on main screen
export const displayCurrentDayWeather = (data) => {
  let fahrenheit = (data.main.temp * 9) / 5 + 32;
  let coord = data.coord
  cityName.textContent = data.name;
  displayTemp.textContent = `${Math.floor(fahrenheit)}°F`;
  displayWind.textContent = `${data.wind.speed} MPH`;
  displayHumidity.textContent = `${data.main.humidity}%`;
  sky.textContent = data.weather[0].description;
  displayIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
  displayIcon.setAttribute("alt", data.weather[0].description);

  getForecast(coord);
};

displayCurrentDate();
displayCurrentTime();
//getFirstSearch("New York");
