import { useEffect, useState } from 'react'
import countriesService from "./services/countries.js"

import Country from './components/Country'
import Search from './components/Search'
import CountryList from './components/CountryList.jsx'

const MAX_COUNTRIES = 10


function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setfilteredCountries] = useState([]);
  const [singleCountry, setSingleCountry] = useState(null);
  const [search, setSearch] = useState("");



  const searchHandler = (event) => {
    setSearch(event.target.value)
  }

  const getSingleCountry = (countryName) => {
    countriesService
      .getByName(countryName)
      .then(country => setSingleCountry(country))
  }

  // initialize countries array
  useEffect(() => {
    countriesService
      .getAll()
      .then(res => {
        setCountries(res)
      }
      )
  }, [])

  // Filter by < 10 contries or single country
  useEffect(() => {
    if (countries) {
      const filtered = countries.filter(
        country => country.name.common.toLowerCase().includes(search.toLowerCase())
      )
      if (filtered.length === 1) {
        setSingleCountry(filtered[0])
      } else {
        setSingleCountry(null)
        setfilteredCountries(filtered)
      }

    }
  }, [search])

  return (
    <>
    <Search search={search} searchHandler={searchHandler} />
    {
      singleCountry
      ? <Country country={singleCountry}/>
      : <CountryList countries={filteredCountries} max={MAX_COUNTRIES} showCountry={getSingleCountry} />
    }
    </>
  )
}

export default App
