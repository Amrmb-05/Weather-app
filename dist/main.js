/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlGQUF5RixTQUFTO0FBQ2xHLE1BQU0sY0FBYztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShsb2NhdGlvbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1jZDcyOWEzOGMyZDA0Nzg2OTZmMTIxMDMwMjMxOTA5JnE9JHtsb2NhdGlvbn0mZGF5cz0zYCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH0sXG4gICk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cblxuY29uc3Qgd2VhdGhlcmRhdGEgPSBnZXREYXRhKFwia2hhcnRvdW1cIik7XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGdldFRlbXAoZGF0YSkge1xuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRhdGE7XG4vLyAgIGNvbnN0IHRlbXBDID0gcmVzcG9uc2UuY3VycmVudC50ZW1wX2M7XG4vLyAgIGNvbnN0IHRlbXBGID0gcmVzcG9uc2UuY3VycmVudC50ZW1wX2Y7XG4vLyAgIGNvbnNvbGUubG9nKHRlbXBDKTtcbi8vICAgY29uc29sZS5sb2codGVtcEYpO1xuLy8gfVxuXG4vLyBnZXRUZW1wKHdlYXRoZXJkYXRhKTtcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlQ3VycmVudFdlYXRoZXIoZGF0YSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRhdGE7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IHtcbiAgICBjdXJyZW50VGVtcEM6IHJlc3BvbnNlLmN1cnJlbnQudGVtcF9jLFxuICAgIGN1cnJlbnRUZW1wRjogcmVzcG9uc2UuY3VycmVudC50ZW1wX2YsXG4gICAgZmVlbHNMaWtlQzogcmVzcG9uc2UuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICBmZWVsc0xpa2VGOiByZXNwb25zZS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgIG1heFRlbXBDOiByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jLFxuICAgIG1heFRlbXBGOiByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mLFxuICAgIG1pblRlbXBDOiByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jLFxuICAgIG1pblRlbXBGOiByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mLFxuICAgIGNoYW5jZU9mUmFpbjogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxuICB9O1xuICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlckRhdGEpO1xuICByZXR1cm4gY3VycmVudFdlYXRoZXJEYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwYXJzZURhaWx5V2VhdGhlcihkYXRhLCBkYXkpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkYXRhO1xuICBjb25zdCBkYWlseVdlYXRoZXJEYXRhID0ge1xuICAgIGF2Z1RlbXBDOiByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5hdmd0ZW1wX2MsXG4gICAgYXZnVGVtcEY6IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5LmF2Z3RlbXBfZixcbiAgICBtYXhUZW1wQzogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkubWF4dGVtcF9jLFxuICAgIG1heFRlbXBGOiByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5tYXh0ZW1wX2YsXG4gICAgbWluVGVtcEM6IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5Lm1pbnRlbXBfYyxcbiAgICBtaW5UZW1wRjogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkubWludGVtcF9mLFxuICAgIGNoYW5jZU9mUmFpbjogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXG4gIH07XG4gIGNvbnNvbGUubG9nKGRhaWx5V2VhdGhlckRhdGEpO1xufVxuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSBpbnB1dC52YWx1ZTtcbiAgY29uc29sZS5sb2cobG9jYXRpb24pO1xuICBjb25zdCBkYXRhID0gZ2V0RGF0YShsb2NhdGlvbik7XG4gIHBhcnNlQ3VycmVudFdlYXRoZXIoZGF0YSk7XG4gIHBhcnNlRGFpbHlXZWF0aGVyKGRhdGEsIDEpO1xuICBwYXJzZURhaWx5V2VhdGhlcihkYXRhLCAyKTtcbn0pO1xuLy8gYXN5bmMgZnVuY3Rpb24gcmVuZGVyKGRhdGEpIHtcbi8vICAgY29uc3QgcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuLy8gICBjb25zdCB0ZW1wID0gYXdhaXQgcGFyc2VDdXJyZW50V2VhdGhlcihkYXRhKTtcbi8vICAgY29uc29sZS5sb2codGVtcCk7XG4vLyAgIHAuaW5uZXJUZXh0ID0gdGVtcC5jdXJyZW50VGVtcEM7XG4vLyB9XG5cbi8vIHJlbmRlcih3ZWF0aGVyZGF0YSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=