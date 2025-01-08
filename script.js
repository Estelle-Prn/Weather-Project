function IDK(event) {
  event.preventDefault();
  let ResultCityTap = document.querySelector("#SearchText");
  let ShowCity = document.querySelector("#CityName");
  ShowCity.innerHTML = ResultCityTap.value;
}

let ResultSearchBlock = document.querySelector("#search-block");
ResultSearchBlock.addEventListener("submit", IDK);
