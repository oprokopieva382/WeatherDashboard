import {displayCurrentDayWeather} from "./script.js"




//first default search before user type own search
const firstSearchApp = async (city) => {
  const APIKEY = "31062848022c12a9b5c54447286aa8b2";
  const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

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

export { firstSearchApp,  };