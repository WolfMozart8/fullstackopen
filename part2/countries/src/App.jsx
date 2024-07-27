import { useEffect, useState } from 'react'
import countriesService from "./services/countries.js"

import Country from './components/Country'
import Search from './components/Search'
import CountryList from './components/CountryList.jsx'

const MAX_COUNTRIES = 10


function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setfilteredCountries] = useState([]);
  const [search, setSearch] = useState("");

  const country = {
    name: "test",
    capital: "test capital",
    area: 1231,
    flags: {
      png: "test"
    }
  }


  const searchHandler = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    countriesService
      .getAll()
      .then(res => {
        setCountries(res)
      }
      )
  }, [])

  useEffect(() => {
    if (countries) {
      const filtered = countries.filter(
        country => country.name.common.toLowerCase().includes(search.toLowerCase())
      )
      setfilteredCountries(filtered)
      console.log(filteredCountries);
    }
  }, [search])

  return (
    <>
    <Search search={search} searchHandler={searchHandler} />
    {
      filteredCountries.length === 1
      ? <Country country={filteredCountries[0]}/>
      : <CountryList countries={filteredCountries} max={MAX_COUNTRIES} />
    }

    {/* <h1>{filteredCountries.map(a => <div>{a.name.common}</div>)}</h1> */}
    {/* <Country country={country}/> */}
    </>
  )
}

export default App
