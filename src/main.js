// Function to get weather data for a given city
async function getWeather(city) {
  const apiKey = "ae942c67c292254abcaab4dfba8e304d"; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod === 200) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

const inputField = document.getElementById("get_city");

inputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const getCity = document.getElementById("get_city").value;
    getWeather(getCity).then((data) => {
      if (data) {
        console.log(data);
        // You can add code here to display weather data on the page
      } else {
        console.log("No weather data found");
      }
    });
  }
});
