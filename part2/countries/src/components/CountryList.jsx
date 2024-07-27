const CountryList = ({countries, showCountry, max}) => {
    return (
        <>
            {
                countries.length > max
                ? <div>Too many matches, specify another filter</div>
                : countries.map(country =>
                    <div key={country.name.common} >{country.name.common}
                        <button onClick={() => showCountry(country.name.common)}>show</button>
                    </div>)
                }
        </>
    )
}

export default CountryList
