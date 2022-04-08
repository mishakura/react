const Message = ({message}) =>{
    let checkForError = message.search("Error")

    const messageStyle = {
        display: 'block',
        backgroundColor: 'green',
        padding: 5,
        color: 'white',
        fontSize: 20   
    }

    const messageErrorStyle = {
        display: 'block',
        backgroundColor: 'red',
        padding: 5,
        color: 'white',
        fontSize: 20 

    }



    if (!message){
        return null
    }
    
    return(<div style={checkForError < 0 ? messageStyle : messageErrorStyle}>
        {message}
    </div>)

        
}


export default Message