const input = document.querySelector("input");
const search = document.querySelector("button");

async function getData(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=cd729a38c2d0478696f121030231909&q=${location}&days=4`,
    { mode: "cors" },
  );
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

const weatherdata = getData("khartoum");

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
    currentTempC: response.current.temp_c,
    currentTempF: response.current.temp_f,
    currentWindMph: response.current.wind_mph,
    feelsLikeC: response.current.feelslike_c,
    feelsLikeF: response.current.feelslike_f,
    maxTempC: response.forecast.forecastday[0].day.maxtemp_c,
    maxTempF: response.forecast.forecastday[0].day.maxtemp_f,
    minTempC: response.forecast.forecastday[0].day.mintemp_c,
    minTempF: response.forecast.forecastday[0].day.mintemp_f,
    chanceOfRain: response.forecast.forecastday[0].day.daily_chance_of_rain,
  };
  console.log(currentWeatherData);
  return currentWeatherData;
}

async function parseDailyWeather(data, day) {
  const response = await data;
  const forecastArr = [];
  for (let i = 1; i <= day; i += 1) {
    const dailyWeatherData = {
      avgTempC: response.forecast.forecastday[i].day.avgtemp_c,
      avgTempF: response.forecast.forecastday[i].day.avgtemp_f,
      maxTempC: response.forecast.forecastday[i].day.maxtemp_c,
      maxTempF: response.forecast.forecastday[i].day.maxtemp_f,
      minTempC: response.forecast.forecastday[i].day.mintemp_c,
      minTempF: response.forecast.forecastday[i].day.mintemp_f,
      chanceOfRain: response.forecast.forecastday[i].day.daily_chance_of_rain,
    };
    forecastArr.push(dailyWeatherData);
  }
  console.log(forecastArr);
}
parseDailyWeather(weatherdata, 2);

async function render(data) {
  const main = document.getElementById("main");
  const currentWeather = await parseCurrentWeather(data);
  const forecast = await parseDailyWeather(data, 2);
  main.innerHTML = "";
  main.innerHTML = `
  <div class="location">
            <h2>${currentWeather.condition}</h2>
            <h3>${currentWeather.city},  ${currentWeather.country}</h3>
        </div>
        <div class="today-weather">
            <h1>${currentWeather.currentTempC}&deg;C</h1>
            <div class="line"></div>
            <ul>
              <li>Feels like: ${currentWeather.feelsLikeC}&deg;C<li>
              <li>Wind: ${currentWeather.currentWindMph} mph</li>
              <li>Chance of rain: ${currentWeather.chanceOfRain}%</li>
              <li> 
              <ul>
        <div class="forecast">
            <h2>
        </div> 
        </div>
  `;
}

search.addEventListener("click", () => {
  const location = input.value;
  console.log(location);
  const data = getData(location);
  render(data);
  input.value = "";
});
