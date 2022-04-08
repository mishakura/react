const CountryInformation = (props) =>{
    const languages = props.idioma
    const idiomas = Object.values(languages)
    
    return(
        <div>
            <h2>{props.name}</h2>
            <p>Capital: {props.capital}</p>
            <p>Area: {props.area}</p>
            <h2>lenguages:</h2>
            <ul>
                {idiomas.map(idioma => <li key = {idiomas.indexOf(idioma)}>{idioma}</li>)}
            </ul>
            <img src={props.image.png}/>
         



        </div>
        )
    

}

export default CountryInformation;