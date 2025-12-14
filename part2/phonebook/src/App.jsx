import { useState } from 'react'

const SearchField = ({setShowall,setSearchName}) => {

  const handleOnchange = (event) =>
  {
      if(event.target.value !== '')
      {
        setShowall(false)
        setSearchName(event.target.value)
      }
      else{
        setShowall(true)
        setSearchName('')
      }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Search</h2>
      <label>filter shown with <input type="text" onChange={handleOnchange}/></label>
    </div>
  )

}

const DisplayPhonebook = ({persons,showall,searchName}) =>{

  if (showall)
    return(
        <ol>
            {persons.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
        </ol>
      )
  else
    return(
      <ol>
        {persons.filter((person) => person.name.toLowerCase().includes(searchName.toLowerCase())).map(person => <li key={person.id}>{person.name} {person.number}</li>)}
      </ol>
    )
}


const PersonForm = ({handleSubmit,newName,newNumber,setNewName,setNewnumber}) =>
{

  return (
    <div>
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
    </div>

  )

}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewnumber] = useState('');
  const [searchName,setSearchName] = useState('');
  const [showall, setShowall] = useState(true);


  const handleSubmit = (event) => {
    event.preventDefault();
    if(!persons.some(person => person.name == newName)){
    const newPerson = {name : newName, number: newNumber, id : persons.length + 1}
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
      <SearchField setShowall={setShowall} setSearchName={setSearchName}/>
      <h2>Add a new</h2>
      <PersonForm handleSubmit={handleSubmit} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewnumber={setNewnumber}/>
      <h2>Numbers</h2>
      <DisplayPhonebook persons={persons} showall={showall} searchName={searchName}/>
      
    </div>
  )
}

export default App