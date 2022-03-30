import { useState, useEffect } from 'react'
import Persons from "./components/Persons"
import AddNum from "./components/AddNum"
import Filter from "./components/Filter"
import axios from "axios"


const App = () => {
  const [persons, setPersons] = useState([])
  const [searched, setSearched] = useState(persons) 
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [lookUp, setLookUp] = useState('')

  useEffect(() =>{
    axios.get("http://localhost:3001/persons")
    .then(response =>{
      console.log(response.data)
      setPersons(response.data)
      setSearched(response.data)
    })
  }, [])


  const handleNameChange = (e) =>{
    setNewName(e.target.value)

  }
  const handleNumberChange = (e) =>{
    setNewNumber(e.target.value)
  }
  const addName = (e) =>{
    e.preventDefault()
    const newObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    var nameInDataBase = false
    persons.forEach(element =>{
      if(element.name.toLowerCase() === newObject.name.toLowerCase()){
        nameInDataBase = true
      }
    } )
    nameInDataBase ? alert(`${newObject.name} is already added to phonebook`) : setPersons(persons.concat(newObject))

  }

  const search = (e) =>{
    setLookUp(e.target.value)
    setSearched(persons.filter(x => x.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }


  return (
    <div>
    <h2>Phonebook</h2>
    <Filter val ={lookUp} lookChange = {search}/>
  
     
    <h3>Add a new</h3>
    <AddNum onSubmit={addName} valueName = {newName} changeName ={handleNameChange}
    valueNum = {newNumber} changeNum = {handleNumberChange}/>


    <h3>Numbers</h3>
    <Persons persons = {searched}/>



  </div>
  )
}

export default App


