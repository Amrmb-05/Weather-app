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
