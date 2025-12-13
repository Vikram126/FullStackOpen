import { useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault();
    if(!persons.some(person => person.name == newName)){
    const newPerson = {name : newName}
    setNewName('')
    setPersons(persons.concat(newPerson));
    
    }
    else{
      alert(`${newName} is already added to the phonebook`);
    }
    
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input placeholder='Enter Name' value={newName} onChange={(e)=>setNewName(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ol>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ol>
      
    </div>
  )
}

export default App