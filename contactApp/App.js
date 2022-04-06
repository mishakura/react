import { useState, useEffect } from 'react'
import Persons from "./components/Persons"
import AddNum from "./components/AddNum"
import Filter from "./components/Filter"
import axios from "axios"
import contactService from "./services/axiosFunc"


const App = () => {
  const [persons, setPersons] = useState([])
  const [searched, setSearched] = useState(persons) 
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [lookUp, setLookUp] = useState('')

  useEffect(() =>{
    contactService.getAll()
    .then(allContacts =>{
      setPersons(allContacts)
      setSearched(allContacts)
    })
  }, [])

  const deleteButton = (id) =>{
    const searchById = persons.filter(p => p.id == id)
    console.log(id)
    let deleteConfirmation = window.confirm(`Do you really want to delete ${searchById[0].name}?` )
    if (deleteConfirmation){
      axios.delete(`http://localhost:3001/persons/${id}`)
    .then(response => setPersons(persons.filter(p => p.id != id)))
    }
    
  }


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
      number: newNumber
    }
    
    let nameNotInDataBase = true
    let idOfExistingData = 0
    persons.forEach(element =>{
      if(element.name.toLowerCase() === newObject.name.toLowerCase()){
        nameNotInDataBase = false
        idOfExistingData = element.id
        if (element.number == newObject.number){
          alert(`${element.name} is already in your conctact App`)
          
        }
        else{
          let changeOfNumber = window.confirm(`${element.name} is already in your contact App. Would you like to change the old number for the new one?`)
          if (changeOfNumber){
            const changeContactNumber = persons.filter(p => p.id === idOfExistingData)
            const newObject = {...changeContactNumber[0], number: newNumber}
            contactService.update(idOfExistingData, newObject)
            .then(changedData => setPersons(persons.map(p => p.id !== changedData.id ? p : changedData)))

          }
        }

        
      }
    } )
    if (nameNotInDataBase){
      contactService.create(newObject)
    .then(returnedNote => {
      
      setPersons(persons.concat(returnedNote))})

    }
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
    <Persons persons = {persons} look = {lookUp} filter = {searched} deleteButton = {deleteButton}/>



  </div>
  )
}

export default App