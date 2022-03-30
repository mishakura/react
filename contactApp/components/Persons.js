const Person = (props) =>{
    return(
    <h4>{props.name} {props.number}</h4>
    )
    
}



const Persons = ({persons}) =>{
    
    return(
        <div>        
        {persons.map(p => 
            <Person key={p.id} name={p.name} number={p.number} />
          )}

        </div>
    )
}




export default Persons;