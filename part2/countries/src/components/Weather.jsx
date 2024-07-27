import { useEffect, useState } from "react";
import weatherService from "../services/weather";

const Weather = ({cityName}) => {
    const [city, setCity] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState("");

    useEffect(() => {
        weatherService
            .getWeather(cityName)
            .then(res => {
                const weather = {...res}
                setCity({...weather})
                setWeatherIcon(weatherService.getIcon(weather.weather[0].icon))
            })
    }, [])

    return (
        <>
            {
            city ?
            <>
            <h1>Weather in {cityName}</h1>
            <div>temperature: {city.main.temp} Celcius</div>
            <img src={weatherIcon} />
            <div>wind: {city.wind.speed} m/s</div>
            </>
            : <></>
            }
        </>
    )
}

export default Weather
