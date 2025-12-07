import { useState } from 'react'

const Button = ({text,onClick}) => ( <button onClick={onClick}>{text}</button>)

const StatisticLine = ({text, value}) => {
  return(
  
      <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
    
  )
}

const Statistics = ({good, bad , neutral}) =>
{
if (good==0 && bad==0 && neutral == 0)
{
  return(
    <div>
      <h1>Statistics</h1>
      No feedback given
    </div>
  )
}

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={good + neutral + bad}/>
      <StatisticLine text="average" value={(good - bad)/(good + bad + neutral)}/>
      <StatisticLine text="positive" value={(good*100/(good+bad+neutral)) + ' %'}/>
        </tbody>
      
      </table>





      
    </div>
      
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' onClick={()=>setGood(good+1)}/>
      <Button text='neutral' onClick={()=>setNeutral(neutral+1)}/>
      <Button text='bad' onClick={()=>setBad(bad+1)}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
      
    </div>
  )
}

export default App