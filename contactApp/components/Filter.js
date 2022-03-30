const Filter = (props) =>{
    return(
        <div>
            <form>
                Search for contact<input value = {props.val} onChange={props.lookChange}/>
        
            </form>

        </div>
        )
}



export default Filter