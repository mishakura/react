import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [arr, setArr] = useState([0,0,0,0,0,0,0])
  const [selected, setSelected] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const goodClick = () =>{
    setGood(good + 1)
  }
  const badClick = () =>{
    setBad(bad + 1)
  }
  const neutralClick = () =>{
    setNeutral(neutral + 1)
  }
  const randomAnecdote = () =>{
    let num = Math.floor(Math.random() * 6);
    setSelected(num)
  }
  const like = () =>{
    arr[selected] += 1
    setArr([...arr])
  }


  return (
    <div>
      <Header header = "Anecdote of the day"/>
      <Quote anecdote = {anecdotes[selected]}/>
      
      <Votes arr = {arr[selected]}/>
      <Button onClick = {like} text = "vote"/>
      <Button onClick = {randomAnecdote} text = "next quote"/>
      <Header header = "Anecdote with most votes"/>
      <Quote anecdote = {anecdotes[arr.indexOf(Math.max(...arr))]}/>
      
    </div>
  )
}




const Votes = (props) =>{
  return(
    <p>has {props.arr} votes</p>

  )
}

const Header = (props) => <h1>{props.header}</h1>
const Button = (props) =>{
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}
const Statistics = (props) =>{
  const total = props.bad + props.good + props.neutral
  if(total == 0){
    return(
      <p>No feedback given</p>
    )
  }
  return(
    <table>
      <tbody>
    <StatisticLine text = "good" value = {props.good}/>
    <StatisticLine text = "neutral" value = {props.neutral}/>
    <StatisticLine text = "bad" value = {props.bad}/>
    <StatisticLine text = "total" value = {total}/>
    <StatisticLine text = "positive" value = {Math.round((props.good / total) * 100) + "%"} />
    </tbody>
    </table>
  )

}

const StatisticLine = (props) =>{
  return(
    <tr><th>{props.text}</th> 
    <td>{props.value}</td></tr>
  )
}

 const Quote = (props) =>{
   return(
     <h4>{props.anecdote}</h4>

   )
 }
export default App