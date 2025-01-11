function CorrespondingTemperature(response) {
  let UpdateTemperature = document.querySelector("#actual-temperature");
  let temperature = response.data.temperature.current;
  let ShowCity = document.querySelector("#CityName");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#Humidity");
  let windSpeed = document.querySelector("#Wind-speed");
  let DayTime = document.querySelector("#DayAndTime");
  let date = new Date(response.data.time * 1000);

  DayTime.innerHTML = `${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  description.innerHTML = response.data.condition.description;
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
