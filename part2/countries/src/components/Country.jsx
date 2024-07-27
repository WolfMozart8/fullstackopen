const Country = ({country}) => {
    const languages = Object.values(country.languages)

    return (
        <>
            <h1>{country.name.common}</h1>

            <div>capital {country.capital}</div>
            <div>area {country.area}</div>

            <h3>Languages:</h3>
            <ul>
            {languages.map(lang => <li>{lang}</li>)}
            </ul>

            <img src={country.flags.png} alt="country flag"/>
        </>
    )
}

export default Country