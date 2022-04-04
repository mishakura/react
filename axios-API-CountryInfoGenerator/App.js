import { useState, useEffect } from "react";
import axios from "axios";
import SearchCountry from "./components/SearchCountry"
import CountryInformation from "./components/CountryInformation"
import DisplayCountry from "./components/DisplayCountry"
import Weather from "./components/Weather"


const App = () =>{
  const api_key = process.env.REACT_APP_API_KEY
  console.log(process.env)
  
  const [country, setCountry] = useState([]);
  const [formInput, setformInput] = useState("");
  const [weather, setWeather] = useState([])
  const [isOnlyOneCountry, setOnlyOneCountry] = useState(false)

  
  
  const [filteredCountry, setfilteredCountry] = useState(country)
  
  useEffect(() =>{
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response => {
      
      const data = response.data
      setCountry(data)
      
    })
  }, [])


  //
  
  useEffect(() =>{
    if (filteredCountry.length == 1){
    let latitude = filteredCountry[0].capitalInfo.latlng[0]
    let longitude = filteredCountry[0].capitalInfo.latlng[1]
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`)
    .then(response => {
      
      const data = response.data
      setWeather(data)
      
    })
  }
  }, [filteredCountry])

  
  const formChange = (e) =>{
    setformInput(e.target.value)
    setfilteredCountry(country.filter(c => c.name.common.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  return(
    <div>
      
      <SearchCountry val = {formInput} formChange = {formChange}/>
      <DisplayCountry data = {filteredCountry} weather = {weather}/>
      
    </div>
  )
}



export default App;