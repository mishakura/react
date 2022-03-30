const AddNum = (props) =>{
    return(
        <form onSubmit={props.onSubmit}>
            <div>
            name<input value={props.valueName} onChange={props.changeName} />
            </div>
            <div>
            number<input value = {props.valueNum} onChange={props.changeNum}/>
            </div>
            <button type="submit">add</button>

        </form>
        )

}



export default AddNum;