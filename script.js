const apiKey = "5878e9922e6a66aa5168f4ab59accfb5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city) {
    const response = await fetch(apiUrl +city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{ 
    var data=await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    let condition = data.weather[0].main;
let temp = data.main.temp;

if (condition === "Snow" || temp <= 0) {
    weatherIcon.src = "images/snow.png";
}
else if (condition === "Rain") {
    weatherIcon.src = "images/rain.png";
}
else if (condition === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
}
else if (condition === "Mist") {
    weatherIcon.src = "images/mist.png";
}
else if (condition === "Clouds") {
    weatherIcon.src = "images/clouds.png";
}
else if (condition === "Clear") {
    weatherIcon.src = temp <= 10 ? "images/cold-clear.png" : "images/clear.png";
}
else {
    weatherIcon.src = "images/clear.png";
}


    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

}
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
