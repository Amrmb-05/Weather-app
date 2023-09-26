import { format } from "date-fns";

const main = document.getElementById("main");
const input = document.querySelector("input");
const search = document.querySelector("button");
const errorMesage = document.querySelector(".error");
async function getData(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=cd729a38c2d0478696f121030231909&q=${location}&days=4`,
    { mode: "cors" },
  );
  if (response.status !== 200) {
    errorMesage.innerHTML =
      "<p>Location not found.</p><p>Please enter a valid location</p>";
  } else {
    const weatherData = await response.json();
    return weatherData;
  }

  // console.log(weatherData);
}

// function errorHandler() {
//   errorMesage.innerText = "Location not found";
// }

// async function getTemp(data) {
//   const response = await data;
//   const tempC = response.current.temp_c;
//   const tempF = response.current.temp_f;
//   console.log(tempC);
//   console.log(tempF);
// }

// getTemp(weatherdata);
async function parseCurrentWeather(data) {
  const response = await data;
  const currentWeatherData = {
    city: response.location.name,
    country: response.location.country,
    condition: response.current.condition.text,
    currentTempC: Math.round(response.current.temp_c),
    currentTempF: Math.round(response.current.temp_f),
    currentWindMph: Math.round(response.current.wind_mph),
    feelsLikeC: Math.round(response.current.feelslike_c),
    feelsLikeF: Math.round(response.current.feelslike_f),
    maxTempC: Math.round(response.forecast.forecastday[0].day.maxtemp_c),
    maxTempF: Math.round(response.forecast.forecastday[0].day.maxtemp_f),
    minTempC: Math.round(response.forecast.forecastday[0].day.mintemp_c),
    minTempF: Math.round(response.forecast.forecastday[0].day.mintemp_f),
    humidity: Math.round(response.current.humidity),
    chanceOfRain: Math.round(
      response.forecast.forecastday[0].day.daily_chance_of_rain,
    ),
  };
  console.log(currentWeatherData);
  return currentWeatherData;
}

async function parseDailyWeather(data, day) {
  const response = await data;
  const forecastArr = [];
  for (let i = 1; i <= day; i += 1) {
    const dailyWeatherData = {
      day: format(new Date(response.forecast.forecastday[i].date), "EEEE"),
      condition: response.forecast.forecastday[i].day.condition.text,
      avgTempC: Math.round(response.forecast.forecastday[i].day.avgtemp_c),
      avgTempF: Math.round(response.forecast.forecastday[i].day.avgtemp_f),
      maxTempC: Math.round(response.forecast.forecastday[i].day.maxtemp_c),
      maxTempF: Math.round(response.forecast.forecastday[i].day.maxtemp_f),
      minTempC: Math.round(response.forecast.forecastday[i].day.mintemp_c),
      minTempF: Math.round(response.forecast.forecastday[i].day.mintemp_f),
      humidity: Math.round(response.forecast.forecastday[i].day.avghumidity),
      chanceOfRain: Math.round(
        response.forecast.forecastday[i].day.daily_chance_of_rain,
      ),
    };
    forecastArr.push(dailyWeatherData);
  }
  console.log(forecastArr);
  return forecastArr;
}

async function renderCurrentWeather(data, tempScale) {
  const currentWeather = await parseCurrentWeather(data);
  const forecast = await parseDailyWeather(data, 2);
  console.log(forecast);
  main.innerHTML = "";
  if (tempScale === "c") {
    main.innerHTML = `
  <div class="location">
            <h2>${currentWeather.condition}</h2>
            <h3 class="city">${currentWeather.city},  ${currentWeather.country}</h3>
        </div>
        <div class="today-weather">
          <div>
            <h1>${currentWeather.currentTempC}&deg;C</h1>
            <div class="fahrenheit">Display F&deg;</div>
          </div>
            <div class="line"></div>
            <ul>
              <li class="temperature">High: ${currentWeather.maxTempC}&deg;C<li>
              <li class="temperature">Low: ${currentWeather.minTempC}&deg;C<li>
              <li class="temperature">Feels like: ${currentWeather.feelsLikeC}&deg;C<li>
              <li>Wind: ${currentWeather.currentWindMph} mph</li>
              <li>Humidity: ${currentWeather.humidity}%</li>
              <li>Chance of rain: ${currentWeather.chanceOfRain}%</li>
              <li> 
              <ul>
            </div> 
       
        </div>
  `;
  } else if (tempScale === "f") {
    main.innerHTML = `
  <div class="location">
            <h2>${currentWeather.condition}</h2>
            <h3 class="city">${currentWeather.city},  ${currentWeather.country}</h3>
        </div>
        <div class="today-weather">
          <div>
            <h1>${currentWeather.currentTempF}&deg;F</h1>
            <div class="celsius">Display C&deg;</div>
          </div>
            <div class="line"></div>
            <ul>
              <li class="temperature">High: ${currentWeather.maxTempF}&deg;F<li>
              <li class="temperature">Low: ${currentWeather.minTempF}&deg;F<li>
              <li class="temperature">Feels like: ${currentWeather.feelsLikeF}&deg;F<li>
              <li>Wind: ${currentWeather.currentWindMph} mph</li>
              <li>Humidity: ${currentWeather.humidity}%</li>
              <li>Chance of rain: ${currentWeather.chanceOfRain}%</li>
              <li> 
              <ul>
            </div> 
       
        </div>
  `;
  }
}

async function renderDailyWeather(data, tempScale) {
  const forecastDisplay = document.getElementById("forecast");
  const forecast = await parseDailyWeather(data, 2);
  forecastDisplay.innerHTML = "";
  errorMesage.innerText = "";
  for (let i = 0; i < 2; i += 1) {
    console.log(i);
    if (tempScale === "c") {
      forecastDisplay.innerHTML += `
   
    <div class="days">
    <div>
      <h2>${forecast[i].day}</h2>
        <h3 class="temperature">${forecast[i].maxTempC}&deg;C</h3></li>
        <p class="temperature">${forecast[i].minTempC}&deg;C</p>
      </div>
        <div class="line"></div>
        <ul>
        <li>Humidity: ${forecast[i].humidity}%</li>
        <li>Chance of rain: ${forecast[i].chanceOfRain}%</li>

        <li> 
        <ul>
    </div>

  `;
    } else if (tempScale === "f") {
      forecastDisplay.innerHTML += `
   
      <div class="days">
      <div>
        <h2>${forecast[i].day}</h2>
          <h3 class="temperature">${forecast[i].maxTempF}&deg;F</h3></li>
          <p class="temperature">${forecast[i].minTempF}&deg;F</p>
        </div>
          <div class="line"></div>
          <ul>
          <li>Humidity: ${forecast[i].humidity}%</li>
          <li>Chance of rain: ${forecast[i].chanceOfRain}%</li>
  
          <li> 
          <ul>
      </div>
  
    `;
    }
  }
}

search.addEventListener("click", (event) => {
  const location = input.value;
  console.log(location);
  const data = getData(location);
  renderCurrentWeather(data, "c");
  renderDailyWeather(data, "c");
  input.value = "";
  event.preventDefault();
});

main.addEventListener("click", (event) => {
  console.log("f");
  const location = document.querySelector(".city").innerText;
  console.log(location);
  const data = getData(location);
  // change from celsius to fahrenheit
  if (event.target.classList.contains("fahrenheit")) {
    renderCurrentWeather(data, "f");
    renderDailyWeather(data, "f");
    // change from fahrenheit to celsius
  } else if (event.target.classList.contains("celsius")) {
    renderCurrentWeather(data, "c");
    renderDailyWeather(data, "c");
  }
});
