function getData() {
  const data = localStorage.getItem("city");

  const parsedData = JSON.parse(data);
  document.getElementById("cityName").textContent = parsedData.name;

  const dateTime = new Date(parsedData.dt * 1000);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = dateTime.toLocaleDateString("en-US", options);
  document.getElementById("date").textContent = formattedDate;

  // Format time
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const formattedTime = dateTime.toLocaleTimeString("en-US", timeOptions);
  document.getElementById("timeZone").textContent = formattedTime;

  // Extract and round the temperature
  const temperature = Math.round(parsedData.main.temp);
  const formattedTemperature = `${temperature}ºC`;
  document.getElementById("temperature").textContent = formattedTemperature;
  // Extract and format the temperatures
  const tempMax = Math.round(parsedData.main.temp_max);
  const tempMin = Math.round(parsedData.main.temp_min);
  const formattedTemperatureRange = `${tempMax}ºC / ${tempMin}ºC`;
  document.getElementById("temperatureRange").textContent =
    formattedTemperatureRange;
  // Extract and replace weather description
  const weatherDescription = parsedData.weather[0].description;
  document.getElementById("weatherDescription").textContent =
    weatherDescription;

  const weatherIconUrl = `http://openweathermap.org/img/wn/${parsedData.weather[0].icon}@2x.png`;
  document.getElementById("weatherIcon").src = weatherIconUrl;

  // Extract the "feels like" temperature
  const feelsLikeTemperature = parsedData.main.feels_like;
  const formattedFeelsLikeTemperature = `${Math.round(feelsLikeTemperature)}ºC`;
  document.getElementById("feelsLikeTemperature").textContent =
    formattedFeelsLikeTemperature;

  // Extract precipitation data
  let precipitation = 0;
  if (parsedData.weather && parsedData.weather[0].main === "Rain") {
    precipitation = `${parsedData.weather[0].description} %`;
  }
  document.getElementById("precipitation").textContent = precipitation;

  // Extract wind speed
  const windSpeed = Math.round(parsedData.wind.speed);
  const formattedWindSpeed = `${windSpeed}km/h`;
  document.getElementById("windSpeed").textContent = formattedWindSpeed;
  // Extract humidity
  const humidity = parsedData.main.humidity;
  const formattedHumidity = `${humidity} %`;
  document.getElementById("humidity").textContent = formattedHumidity;

  //UVindex
  // const uvIndex = parsedData.main.uvIndex;
  // document.getElementById("uvIndex").textContent = uvIndex;

  //tomorrow forecast

  console.log(data);
}
