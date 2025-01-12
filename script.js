function CorrespondingTemperature(response) {
  let UpdateTemperature = document.querySelector("#actual-temperature");
  let temperature = response.data.temperature.current;
  let ShowCity = document.querySelector("#CityName");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#Humidity");
  let windSpeed = document.querySelector("#Wind-speed");
  let DayTime = document.querySelector("#DayAndTime");
  let date = new Date(response.data.time * 1000);
  let iconTemperature = document.querySelector("#temperature-icone");

  DayTime.innerHTML = ActualDate(date);
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  description.innerHTML = response.data.condition.description;
  ShowCity.innerHTML = response.data.city;
  UpdateTemperature.innerHTML = Math.round(temperature);
  iconTemperature.innerHTML = `<img src="${response.data.condition.icon_url}" class="temperature-icone" />`;

  getForecastData(response.data.city);
}

function ActualDate(date) {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hour}:${minutes}`;
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

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function getForecastData(city) {
  let apiKey = "04362ba118dbt14o9f7040e09062332b";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(WeatherForecast);
}

function WeatherForecast(response) {
  let forecastWeather = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastWeather += `  <div class="weather-forecast-days">
            <div class="weather-forecast-date">${formatDay(day.time)}</div>
            <div>
            <img src="${day.condition.icon_url}" class="weather-forecast-icon"/>
            </div>
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-high">
              ${Math.round(day.temperature.maximum)}°</span>
              <span class="weather-forecast-temperature-low">
              ${Math.round(day.temperature.minimum)}°</span>
            </div>
          </div>`;
    }
  });

  let forecast = document.querySelector("#weather-forecast");
  forecast.innerHTML = forecastWeather;
}

let ResultSearchBlock = document.querySelector("#search-block");
ResultSearchBlock.addEventListener("submit", IDK);

/*WeatherForecast();*/
