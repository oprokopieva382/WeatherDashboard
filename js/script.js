import {
  displayCurrentDate,
  displayCurrentTime,
  displayTimeZoneDays,
} from "./day.js";
import { getFirstSearch, getForecast } from "./restApi.js";

const cityName = document.getElementById("cityName");
const displayDate = document.getElementById("displayDate");
const displayIcon = document.getElementById("displayIcon");
const displayTemp = document.getElementById("displayTemp");
const displayWind = document.getElementById("displayWind");
const displayHumidity = document.getElementById("displayHumidity");
const sky = document.getElementById("sky");
const forecast = document.getElementById("forecast");

//function to display 5 days of weather for search-city
export const displayForecast = (data) => {
  const forecastHTML = [];

  for (let index = 1; index < 6; index++) {
    const el = data.list[index];
    if (el) {
      const temp = Math.floor(el.main.temp);
      const dayOfWeek = displayTimeZoneDays(data.city, index);

      const newSection = `
        <section class="forecastBlock">
          <div>${dayOfWeek}</div>
          <div>${temp}°F</div>
          <img
            src="http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png"
            alt="${el.weather[0].description}"
            width="42"
          />
          <div>${el.wind.speed}MPH</div>
          <div>${el.main.humidity}%</div>
        </section>
      `;

      forecastHTML.push(newSection);
    }
  }

  forecast.innerHTML = forecastHTML.join(""); // Join the array into a single string
};

//function to display current day weather condition on main screen
export const displayCurrentDayWeather = (data) => {
  console.log(data);
  let coord = data.coord;
  let temp = Math.floor(data.main.temp);
  cityName.textContent = data.name;
  displayTemp.textContent = `${temp}°F`;
  displayWind.textContent = `${data.wind.speed} MPH`;
  displayHumidity.textContent = `${data.main.humidity}%`;
  sky.textContent = data.weather[0].description;
  displayIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
  displayIcon.setAttribute("alt", data.weather[0].description);

  // const dayOfWeek = displayTimeZoneDay(data);
  // displayDate.textContent = dayOfWeek;

  getForecast(coord);
};

displayCurrentDate();
displayCurrentTime();
//getFirstSearch("New York");
