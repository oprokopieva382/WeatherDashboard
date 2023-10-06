import { displayCurrentDayWeather, displayForecast } from "./script.js";

const APIKEY = "31062848022c12a9b5c54447286aa8b2";

//first function-request to get default city search before user type own search
const getFirstSearch = async (city) => {
  const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=imperial`;

  try {
    const response = await fetch(APIURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayCurrentDayWeather(data);
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (err) {
    console.log(err.message);
  }
};

//function-request to get forecast data give to displayForecast function to display it 
const getForecast = async (coordinates) => {
  const APIURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${APIKEY}&units=imperial`;
  try {
    const response = await fetch(APIURL);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    }
  } catch (err) {
    console.log(err.message);
  }
};

export { getFirstSearch, getForecast };