const input = document.querySelector("#city-input")
const btn = document.querySelector("#search-btn")
const icon = document.querySelector("#weather-icon")
const city = document.querySelector("#city")
const temp = document.querySelector("#temp")
const weatherDescription = document.querySelector("#weather-dec")
const humidity = document.querySelector("#humidity")
const windSpeed = document.querySelector("#wind-speed")

async function getWeatherInfo() {
  btn.disabled = true;
   btn.textContent = "Loading.."
  try {
    const cityName = input.value.trim()

   if (cityName === "") {
    alert("Please enter a city name.");
    return;
}

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=03b156db9cb064945b4df8c1d0fa6e1c&units=metric`

  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  if (data.cod !== 200) {
    throw new Error(data.message);
}

  icon.src =`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  city.textContent = data.name
  temp.textContent = `${data.main.temp} °C`
  weatherDescription.textContent = data.weather[0].description
  humidity.textContent = `${data.main.humidity} %`
  windSpeed.textContent =`${ data.wind.speed} m/s`
  input.value = ""
  } catch (error) {
    icon.src = "https://static.vecteezy.com/system/resources/previews/026/571/030/non_2x/weather-icon-with-sun-and-cloud-on-transparent-background-free-png.png"
    city.textContent = `City Not Found`
    temp.textContent = "-"
    weatherDescription.textContent = "Try Another City"
  humidity.textContent = "-"
  windSpeed.textContent = "-"
  } finally{
    btn.disabled = false
    btn.textContent = "Search"
  }
}

btn.addEventListener("click",getWeatherInfo)
input.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    getWeatherInfo()
  }
})