import { getFirstSearch } from "./restApi.js";

const hidden = document.getElementById("hidden");

const saveToLocalStorage = (value) => {
  let cityArray = JSON.parse(localStorage.getItem("cityName")) || [];
  cityArray.push(value);
  localStorage.setItem("cityName", JSON.stringify(cityArray));
};

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
         console.log("Button clicked:", el);
        getFirstSearch(el);
      });
    });
  }
};

export { saveToLocalStorage, getFromLocalStorage };
