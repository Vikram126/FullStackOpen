import { useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([
    {  name: 'Arto Hellas', number: '040-123456', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewnumber] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if(!persons.some(person => person.name == newName)){
    const newPerson = {name : newName, number: newNumber}
    setNewName('')
    setNewnumber('')
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
          Name: <input placeholder='Enter Name' value={newName} onChange={(e)=>setNewName(e.target.value)}/>
        </div>
        <div>
          Phone: <input placeholder='Enter Number' value={newNumber} onChange={(e)=>setNewnumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ol>
        {persons.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
      </ol>
      
    </div>
  )
}

export default App