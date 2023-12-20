const apiKey ="c2ccfadc28f27039c3653b51310746da";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const searchBox = document.querySelector(".search_box input")
const searchBtn = document.querySelector(".search_box button")
console.log(searchBtn)
console.log(searchBox.value)

async function checkWeather(city){
    // let searchBox = document.getElementById("weather_search").value
    if(searchBox.value !== ""){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
        
        if(response.status === 404){
            // Code to execute when a 404 error occurs
            alert('City not found');
        } else {
            const data = await response.json()
            console.log(data)

            document.getElementById("temp").innerHTML = data.main.temp + "°c"
            document.getElementById("loc").innerHTML = data.name
            document.getElementById("humidity").innerHTML = data.main.humidity + "%"
            document.getElementById("windSpeed").innerHTML = data.wind.speed 
            switch (data.weather[0].main){
                case "Clouds":
                    document.getElementById("weather--icon").setAttribute("src", "./Imgs/clouds.png")
                break;
                case "Clear":
                    document.getElementById("weather--icon").setAttribute("src", "./Imgs/clear.png")
                break;
                case "Drizzle": 
                    document.getElementById("weather--icon").setAttribute("src", "./Imgs/drizzle.png")
                break;
                case "Mist":
                    document.getElementById("weather--icon").setAttribute("src", "./Imgs/mist.png")
                break;
                case "Rain":
                    document.getElementById("weather--icon").setAttribute("src", "./Imgs/rain.png")
                break;
                case "Snow":
                    document.getElementById("weather--icon").setAttribute("src", "./Imgs/snow.png")
                break;
            }
            document.querySelector(".weather").style.display = "block";
                searchBox.value = ""
        }
    } else {
        alert("please enter a city")
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

