const saveToLocalStorage = (value)=> {
    let cityArray = JSON.parse(localStorage.getItem("cityName")) || []
    cityArray.push(value)
    localStorage.setItem("cityName", JSON.stringify(cityArray));
}

export { saveToLocalStorage };