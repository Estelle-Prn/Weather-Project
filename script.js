function CorrespondingTemperature(response) {
  let UpdateTemperature = document.querySelector("#actual-temperature");
  let temperature = response.data.temperature.current;
  let ShowCity = document.querySelector("#CityName");
  ShowCity.innerHTML = response.data.city;
  UpdateTemperature.innerHTML = Math.round(temperature);
}

function APIwork(city) {
  let APIkey = "04362ba118dbt14o9f7040e09062332b";
  let APIurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${APIkey}&units=metric`;
  axios.get(APIurl).then(CorrespondingTemperature);
}

function IDK(event) {
  event.preventDefault();
  let ResultCityTap = document.querySelector("#SearchText");

  APIwork(ResultCityTap.value);
}

let ResultSearchBlock = document.querySelector("#search-block");
ResultSearchBlock.addEventListener("submit", IDK);
