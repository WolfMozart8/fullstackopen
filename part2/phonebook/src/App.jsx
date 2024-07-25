import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: 12345678 }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState("");

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
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={newNameHandler}/></div>
        <div>number: <input value={newPhone} onChange={newPhoneHandler} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div>{person.name} {person.phone}</div>)}
    </div>
  )
}

export default App
