/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlGQUF5RixTQUFTO0FBQ2xHLE1BQU0sY0FBYztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsVUFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQyxrQkFBa0Isb0JBQW9CLEtBQUssdUJBQXVCO0FBQ2xFO0FBQ0E7QUFDQSxrQkFBa0IsNEJBQTRCLEtBQUs7QUFDbkQ7QUFDQTtBQUNBLGdDQUFnQywwQkFBMEIsS0FBSztBQUMvRCwwQkFBMEIsK0JBQStCO0FBQ3pELG9DQUFvQyw0QkFBNEI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShsb2NhdGlvbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1jZDcyOWEzOGMyZDA0Nzg2OTZmMTIxMDMwMjMxOTA5JnE9JHtsb2NhdGlvbn0mZGF5cz00YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH0sXG4gICk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cblxuY29uc3Qgd2VhdGhlcmRhdGEgPSBnZXREYXRhKFwia2hhcnRvdW1cIik7XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGdldFRlbXAoZGF0YSkge1xuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRhdGE7XG4vLyAgIGNvbnN0IHRlbXBDID0gcmVzcG9uc2UuY3VycmVudC50ZW1wX2M7XG4vLyAgIGNvbnN0IHRlbXBGID0gcmVzcG9uc2UuY3VycmVudC50ZW1wX2Y7XG4vLyAgIGNvbnNvbGUubG9nKHRlbXBDKTtcbi8vICAgY29uc29sZS5sb2codGVtcEYpO1xuLy8gfVxuXG4vLyBnZXRUZW1wKHdlYXRoZXJkYXRhKTtcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlQ3VycmVudFdlYXRoZXIoZGF0YSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRhdGE7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IHtcbiAgICBjaXR5OiByZXNwb25zZS5sb2NhdGlvbi5uYW1lLFxuICAgIGNvdW50cnk6IHJlc3BvbnNlLmxvY2F0aW9uLmNvdW50cnksXG4gICAgY29uZGl0aW9uOiByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgIGN1cnJlbnRUZW1wQzogcmVzcG9uc2UuY3VycmVudC50ZW1wX2MsXG4gICAgY3VycmVudFRlbXBGOiByZXNwb25zZS5jdXJyZW50LnRlbXBfZixcbiAgICBjdXJyZW50V2luZE1waDogcmVzcG9uc2UuY3VycmVudC53aW5kX21waCxcbiAgICBmZWVsc0xpa2VDOiByZXNwb25zZS5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgIGZlZWxzTGlrZUY6IHJlc3BvbnNlLmN1cnJlbnQuZmVlbHNsaWtlX2YsXG4gICAgbWF4VGVtcEM6IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2MsXG4gICAgbWF4VGVtcEY6IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2YsXG4gICAgbWluVGVtcEM6IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2MsXG4gICAgbWluVGVtcEY6IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2YsXG4gICAgY2hhbmNlT2ZSYWluOiByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXG4gIH07XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyRGF0YSk7XG4gIHJldHVybiBjdXJyZW50V2VhdGhlckRhdGE7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBhcnNlRGFpbHlXZWF0aGVyKGRhdGEsIGRheSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRhdGE7XG4gIGNvbnN0IGZvcmVjYXN0QXJyID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGRheTsgaSArPSAxKSB7XG4gICAgY29uc3QgZGFpbHlXZWF0aGVyRGF0YSA9IHtcbiAgICAgIGF2Z1RlbXBDOiByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuYXZndGVtcF9jLFxuICAgICAgYXZnVGVtcEY6IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5hdmd0ZW1wX2YsXG4gICAgICBtYXhUZW1wQzogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfYyxcbiAgICAgIG1heFRlbXBGOiByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9mLFxuICAgICAgbWluVGVtcEM6IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2MsXG4gICAgICBtaW5UZW1wRjogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfZixcbiAgICAgIGNoYW5jZU9mUmFpbjogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxuICAgIH07XG4gICAgZm9yZWNhc3RBcnIucHVzaChkYWlseVdlYXRoZXJEYXRhKTtcbiAgfVxuICBjb25zb2xlLmxvZyhmb3JlY2FzdEFycik7XG59XG5wYXJzZURhaWx5V2VhdGhlcih3ZWF0aGVyZGF0YSwgMik7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlcihkYXRhKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gYXdhaXQgcGFyc2VDdXJyZW50V2VhdGhlcihkYXRhKTtcbiAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBwYXJzZURhaWx5V2VhdGhlcihkYXRhLCAyKTtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICBtYWluLmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cImxvY2F0aW9uXCI+XG4gICAgICAgICAgICA8aDI+JHtjdXJyZW50V2VhdGhlci5jb25kaXRpb259PC9oMj5cbiAgICAgICAgICAgIDxoMz4ke2N1cnJlbnRXZWF0aGVyLmNpdHl9LCAgJHtjdXJyZW50V2VhdGhlci5jb3VudHJ5fTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9kYXktd2VhdGhlclwiPlxuICAgICAgICAgICAgPGgxPiR7Y3VycmVudFdlYXRoZXIuY3VycmVudFRlbXBDfSZkZWc7QzwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+RmVlbHMgbGlrZTogJHtjdXJyZW50V2VhdGhlci5mZWVsc0xpa2VDfSZkZWc7QzxsaT5cbiAgICAgICAgICAgICAgPGxpPldpbmQ6ICR7Y3VycmVudFdlYXRoZXIuY3VycmVudFdpbmRNcGh9IG1waDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5DaGFuY2Ugb2YgcmFpbjogJHtjdXJyZW50V2VhdGhlci5jaGFuY2VPZlJhaW59JTwvbGk+XG4gICAgICAgICAgICAgIDxsaT4gXG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcmVjYXN0XCI+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgIDwvZGl2PiBcbiAgICAgICAgPC9kaXY+XG4gIGA7XG59XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IGlucHV0LnZhbHVlO1xuICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG4gIGNvbnN0IGRhdGEgPSBnZXREYXRhKGxvY2F0aW9uKTtcbiAgcmVuZGVyKGRhdGEpO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==