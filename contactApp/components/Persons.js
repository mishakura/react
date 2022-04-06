const Person = (props) =>{
    return(
    <div>
    <h4>{props.name} {props.number} <button onClick = {props.deleteButton}>delete</button></h4> 
    </div>
    )
    
}



const Persons = ({persons,look, filter , deleteButton}) =>{
    
    
    if (!look){
    return(
        <div>        
        {persons.map(p => 
            <Person key={p.id} name={p.name} number={p.number} deleteButton = {() => deleteButton(p.id)} />
          )}

        </div>
    )}
    else{
        return(
            <div>        
            {filter.map(p => 
                <Person key={p.id} name={p.name} number={p.number} />
              )}
    
            </div>
        )

    }
     
   
}




export default Persons;