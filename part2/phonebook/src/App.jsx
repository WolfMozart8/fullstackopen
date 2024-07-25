import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (checkRepeated()) {
      return
    }

    const newPerson = {name: newName}
    setPersons(persons.concat(newPerson))
    setNewName("")
  }

  const newNameHandler = (event) => {
    setNewName(event.target.value)
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
        <div>
          name: <input value={newName} onChange={newNameHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div>{person.name}</div>)}
    </div>
  )
}

export default App
