document.getElementById("get_data").addEventListener("submit", (e) => {
  e.preventDefault();
});

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
    event.preventDefault();
    const getCity = inputField.value;
    getWeather(getCity)
      .then((data) => {
        if (data) {
          console.log(data);
          localStorage.setItem("city", JSON.stringify(data));
          window.location.href = "/details";
        } else {
          console.log("co data");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
});
