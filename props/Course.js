import React from 'react'
const Sum = ({parts}) =>{
  const total = parts.reduce((sum,parts) =>{
    return sum + parts.exercises
  },0)
  
  return(
    <h4>total of {total} exercises</h4>
    
    )

}

const Part = (props) =>{
  return(
    <p>{props.name} {props.ex}</p>
  )
}

const Content  = ({part}) =>{
  return(
    <div>
      {part.map(ex =>
        <Part key= {ex.id} name = {ex.name} ex = {ex.exercises}/>
      )}

    </div>
    )
  
}

const Header = (props) =>{
  return(
    <h1>{props.name}</h1>
  )
}

const Course = ({course}) =>{
  const {id, name, parts} = course
  
  
  return(
    <div>
      <Header name = {name}/>
     
      <Content part = {parts}/>

      <Sum parts = {parts} />
     


    </div>
  )
}
export default Course;