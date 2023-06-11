const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".partition img")

async function weatherCheck(city) {
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + city + "&appid=49342a41aa3ea069716daa8b65ce8364");
  var data = await response.json();
  document.querySelector(".place").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".hum").innerHTML = data.main.humidity + "%" + "<br> Humidity";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h" + "<br> Wind Speed";
  
  console.log(data);
  
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "https://raw.githubusercontent.com/erikflowers/weather-icons/bb80982bf1f43f2d57f9dd753e7413bf88beb9ed/svg/wi-cloudy.svg";
  }
  else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "https://raw.githubusercontent.com/erikflowers/weather-icons/bb80982bf1f43f2d57f9dd753e7413bf88beb9ed/svg/wi-day-sunny.svg";
  }
  else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "https://raw.githubusercontent.com/erikflowers/weather-icons/bb80982bf1f43f2d57f9dd753e7413bf88beb9ed/svg/wi-rain.svg";
  }
  else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "https://raw.githubusercontent.com/erikflowers/weather-icons/bb80982bf1f43f2d57f9dd753e7413bf88beb9ed/svg/wi-rain-mix.svg";
  }
}

async function forecastCheck(city) {
  const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?units=metric&q=" + city + "&appid=49342a41aa3ea069716daa8b65ce8364");
  var data = await response.json();
  console.log(data);
  
  document.querySelector(".tom2").innerHTML = Math.round(data.list[1].main.temp) + "°C";
  document.querySelector(".tom3").innerHTML = data.list[1].weather[0].main;
  
  document.querySelector(".dom2").innerHTML = Math.round(data.list[2].main.temp) + "°C";
  document.querySelector(".dom3").innerHTML = data.list[2].weather[0].main;
}

weatherCheck("delhi");
forecastCheck("delhi");
searchBtn.addEventListener("click", ()=>{
  weatherCheck(searchBox.value);
  forecastCheck(searchBox.value);
})