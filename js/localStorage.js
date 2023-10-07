import { getFirstSearch } from "./restApi.js";

const hidden = document.getElementById("hidden");

//function to store search city as array in local storage
const saveToLocalStorage = (value) => {
  let cityArray = JSON.parse(localStorage.getItem("cityName")) || [];
  if (!cityArray.includes(value)) {
    cityArray.push(value);
    localStorage.setItem("cityName", JSON.stringify(cityArray));
  }
};

//function to get city from local storage create buttons to display and by click search weather again
const getFromLocalStorage = () => {
  let cityArray = JSON.parse(localStorage.getItem("cityName"));
  if (!cityArray || cityArray.length === 0) {
    hidden.style.visibility = "hidden";
  } else {
    hidden.style.visibility = "visible";
    cityArray.forEach((el) => {
      let button = document.createElement("button");
      button.textContent = el;
      button.classList.add("btn", "btn-dark");
      button.style.width = "100%";
      button.style.margin = "1%";
      hidden.appendChild(button);

      button.addEventListener("click", () => {
        getFirstSearch(el);
      });
    });
  }
};

export { saveToLocalStorage, getFromLocalStorage };