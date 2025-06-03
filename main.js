const apiKey = "9959b8b61da445f81cb7ff198a792fee";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?//units=metric&q=";

const searchBox = document.querySelector(".search-box");
const searchInput = document.getElementById("input-box");
const button = document.querySelector("button");
const weatherIcon = document.querySelector(".weatherIcon");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const city = searchInput.value;
  getWeather(city);
});

async function getWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (!response.ok) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
  }
}

//const searchBox = document.querySelector(".search-box input");
//const searchBtn = document.getElementById(".search-box button");

//apiUrl + city + `&appid=${apiKey}`
//https://api.openweathermap.org/data/2.5/weather?q=
