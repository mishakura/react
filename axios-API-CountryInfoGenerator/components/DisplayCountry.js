import axios from "axios";

import { useState, useEffect } from "react";
import CountryInformation from "./CountryInformation"
import Weather from "./Weather"


const DisplayCountry = ({data, weather}) =>{

    const [disabled, setDisabled] = useState(false);
    const [index, setIndex] = useState(0)
    console.log(data)
    



    const buttonClicked = (event) => {
        if (!disabled){
        let index = event.target.id
        setDisabled(true)
        setIndex(index) 
        
        }
        else{
            setDisabled(false)

        } 

    }
    
    if (data.length == 250){
        return(
            <div>
  
            </div>
            )
    }
  
    else if(data.length < 10){ 
        return (
        <div>
            {data.map(n => <div>{n.name.common}<button id = {data.indexOf(n)}onClick ={buttonClicked}>Show</button></div>)}
            {disabled && data? <CountryInformation key = {data[index].name.common} name = {data[index].name.common} capital = {data[index].capital}
            area = {data[index].area} idioma = {data[index].languages} image = {data[index].flags}/> : <div></div>}
            {data.length == 1 && disabled ? <Weather weather = {weather} />: <div></div>} 
        </div>
        )}
    
    else{
        return(
            <h3>Too many matches, be more specific</h3>
        )
    }
   
  }


export default DisplayCountry;
