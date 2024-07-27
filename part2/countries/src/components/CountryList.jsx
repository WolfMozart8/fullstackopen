const CountryList = ({countries, max}) => {
    return (
        <>
            {
                countries.length > max
                ? <div>Too many matches, specify another filter</div>
                : countries.map(country => <div>{country.name.common}</div>)
                }
        </>
    )
}

export default CountryList
