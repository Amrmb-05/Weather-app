const input = document.querySelector("input");
const search = document.querySelector("button");

async function getData(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=cd729a38c2d0478696f121030231909&q=${location}&days=3`,
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
    currentTempC: response.current.temp_c,
    currentTempF: response.current.temp_f,
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
  const dailyWeatherData = {
    avgTempC: response.forecast.forecastday[day].day.avgtemp_c,
    avgTempF: response.forecast.forecastday[day].day.avgtemp_f,
    maxTempC: response.forecast.forecastday[day].day.maxtemp_c,
    maxTempF: response.forecast.forecastday[day].day.maxtemp_f,
    minTempC: response.forecast.forecastday[day].day.mintemp_c,
    minTempF: response.forecast.forecastday[day].day.mintemp_f,
    chanceOfRain: response.forecast.forecastday[day].day.daily_chance_of_rain,
  };
  console.log(dailyWeatherData);
}

search.addEventListener("click", () => {
  const location = input.value;
  console.log(location);
  const data = getData(location);
  parseCurrentWeather(data);
  parseDailyWeather(data, 1);
  parseDailyWeather(data, 2);
});
// async function render(data) {
//   const p = document.querySelector("p");
//   const temp = await parseCurrentWeather(data);
//   console.log(temp);
//   p.innerText = temp.currentTempC;
// }

// render(weatherdata);
