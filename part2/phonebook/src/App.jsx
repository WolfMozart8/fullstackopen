import { useEffect, useState } from 'react'
import "./index.css"

import personService from "./services/person";

import Filter from './components/Filter';
import PersonsForm from './components/PersonForm';
import PersonList from './components/PersonList';
import Notification from './components/Notification';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState("");
  const [messageAdd, setMessageAdd] = useState(null);
  const [messageError, setMessageError] = useState(null);

  const [search, setSearch] = useState("");
  const filteredByName = search === ""
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()

    if (checkRepeated()) {
      const isReplacement = window.confirm(`${newName} is already added to phonbook, replace the old number?`)
      if (isReplacement) {
        const personToUpdate = persons.filter(p => p.name.toLowerCase() === newName.toLowerCase())
        const updatedPerson = {...personToUpdate[0], number: newPhone}

        personService
          .update(updatedPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== updatedPerson.id ? person : returnedPerson))
          })
          .catch(() => {
            showErrorMessage(newName)
          })
      }

      return
    }

    const newPerson = {
      name: newName,
      number: newPhone,
    }

    showMessageAdd(newName)

    personService
      .add(newPerson)
      .then((res) => {
        // res is newPerson, but includes the id
        setPersons(persons.concat(res))
        setNewName("")
        setNewPhone("")
      })
  }

  const deletePerson = (id) => {
    const personToDelete = persons.find(person => person.id === id )
    const isDelete = window.confirm(`delete ${personToDelete.name} ?`)

    if (isDelete) {
      personService
        .remove(id)

        setPersons(persons.filter(person => person.id != id))
    }
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
        // alert(`${newName} is already added to phonebook`)
        isRepeated = true
        return
      }
    })

    return isRepeated
  }

  const showMessageAdd = (personName) => {
    setMessageAdd(`Added ${personName}`)
    setTimeout(() => {
      setMessageAdd(null)
    }, 5000)
  }

  const showErrorMessage = (personName) => {
    setMessageError(`Information of ${personName} has already been removed fromserver`)
    setTimeout(() => {
      setMessageError(null)
    }, 5000)
  }

  useEffect(() => {
    personService
      .getAll()
      .then(initList => setPersons(initList))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <ErrorMessage message={messageError} />
      <Notification message={messageAdd} />
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
      <PersonList personList={filteredByName} deleteHandler={deletePerson} />
    </div>
  )
}

export default App
