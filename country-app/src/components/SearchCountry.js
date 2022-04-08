const SearchCountry = (props) =>{
    return(
        <form >
            Find country: <input value = {props.val}  onChange ={props.formChange}/>

        </form>
    )
}
 export default SearchCountry;