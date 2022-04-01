const Weather = ({weather}) =>{
   
   console.log(weather.main.icon)

    return(
        <div>
            <h2>Weather in {weather.name}</h2>
            <h3>temperature {weather.main.temp} º C</h3>
            <img src ={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
            <h3>wind {weather.wind.speed} m/s</h3>
            


        </div>
        )
}


export default Weather;