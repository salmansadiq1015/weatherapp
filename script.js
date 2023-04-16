const apiKey = "65f99981753c95b65c162afbbc6d3c2e";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=lahore";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");
const weatherName = document.querySelector(".weathername");
const error = document.querySelector(".error p")

async function chectWeather(city){
    const response = await fetch(apiUrl + city+ `&appid=${apiKey}`);
    var data = await response.json()
      
    if(response.status == 404){
        error.style.display= "block"
        document.querySelector(".weather").style.display = "none"
    }else{
        error.style.display= "none"
    }


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +" °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
        weatherName.innerHTML = data.weather[0].main;
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
        weatherName.innerHTML = data.weather[0].main;

    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
        weatherName.innerHTML = data.weather[0].main;

    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
        weatherName.innerHTML = data.weather[0].main;

    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
        weatherName.innerHTML = data.weather[0].main;

    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
        weatherName.innerHTML = data.weather[0].main;
    }
    
    document.querySelector(".weather").style.display = "block"

}


searchBtn.addEventListener("click", ()=>{
    chectWeather(searchBox.value);
})