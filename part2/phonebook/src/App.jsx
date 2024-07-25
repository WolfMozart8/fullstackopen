import { useState } from 'react'

function App() {
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', phone: 12345678 }
  // ])
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState("");

  const [search, setSearch] = useState("");
  const filteredByName = search === ""
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  console.log(filteredByName);
  const addPerson = (event) => {
    event.preventDefault()
    if (checkRepeated()) {
      return
    }

    const newPerson = {
      name: newName,
      phone: newPhone,
    }
    setPersons(persons.concat(newPerson))
    setNewName("")
    setNewPhone("")
  }

  const newNameHandler = (event) => {
    setNewName(event.target.value)
  }

  const newPhoneHandler = (event) => {
    setNewPhone(event.target.value)
  }

  const searchByName = (event) => {
    setSearch(event.target.value)
  }

  const checkRepeated = () => {

    let isRepeated = false

    persons.forEach(person => {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`)
        isRepeated = true
        return
      }
    })

    return isRepeated
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={search} onChange={searchByName} /></div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={newNameHandler}/></div>
        <div>number: <input value={newPhone} onChange={newPhoneHandler} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {filteredByName.map(person => <div>{person.name} {person.phone}</div>)}
    </div>
  )
}

export default App
