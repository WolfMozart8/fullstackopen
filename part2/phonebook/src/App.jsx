import { useEffect, useState } from 'react'
import axios from "axios"
import Filter from './components/Filter';
import PersonsForm from './components/PersonForm';
import PersonList from './components/PersonList';

function App() {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState("");

  const [search, setSearch] = useState("");
  const filteredByName = search === ""
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    if (checkRepeated()) {
      return
    }

    const newPerson = {
      name: newName,
      number: newPhone,
    }

    axios.post("http://localhost:3001/persons", newPerson)
      .catch(error => console.error(error))

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


  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} searchHandler={searchByName} />
      <h2>add a new</h2>
      <PersonsForm
        formHandler={addPerson}
        newName={newName}
        newNameHandler={newNameHandler}
        newPhone={newPhone}
        newPhoneHandler={newPhoneHandler}
      />
      <h2>Numbers</h2>
      <PersonList personList={filteredByName} />
    </div>
  )
}

export default App
