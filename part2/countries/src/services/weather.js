import axios from "axios"
const API_KEY = import.meta.env.VITE_SOME_KEY
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`
const baseUrlIcon = `https://openweathermap.org/img/wn/`

const getWeather = (city) => {
    const request = axios.get(`${baseUrl}&q=${city}`)
    return request.then(res => res.data)
}

const getIcon = (id) => {
    // const request = axios.get(`${baseUrlIcon}${id}@2x.png`)
    // return request.then(res => res.data)
    return `${baseUrlIcon}${id}@4x.png`
}

export default {
    getWeather,
    getIcon,
}
