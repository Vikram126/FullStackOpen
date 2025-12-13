import { useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {name : newName}
    setPersons(persons.concat(newPerson));
    
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input placeholder='Enter Name' onChange={(e)=>setNewName(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <li key={person.name}>{person.name}</li>)}
    </div>
  )
}

export default App