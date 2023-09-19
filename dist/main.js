/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
async function getData(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=cd729a38c2d0478696f121030231909&q=${location}&days=3`,
    { mode: "cors" },
  );
  const weatherData = await response.json();
  return weatherData;
}
const data = getData("cairo");

console.log(data);
// .forecast.forecastday[0].astro.sunrise;

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSx5RkFBeUYsU0FBUztBQUNsRyxNQUFNLGNBQWM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldERhdGEobG9jYXRpb24pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9Y2Q3MjlhMzhjMmQwNDc4Njk2ZjEyMTAzMDIzMTkwOSZxPSR7bG9jYXRpb259JmRheXM9M2AsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9LFxuICApO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuY29uc3QgZGF0YSA9IGdldERhdGEoXCJjYWlyb1wiKTtcblxuY29uc29sZS5sb2coZGF0YSk7XG4vLyAuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==