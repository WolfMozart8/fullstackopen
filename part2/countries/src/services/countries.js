import axios from "axios"
const baseUrlAll = "https://studies.cs.helsinki.fi/restcountries/api/all"
const baseUrlName = "https://studies.cs.helsinki.fi/restcountries/api/name/"

const getAll = () => {
    const request = axios.get(baseUrlAll)
    return request.then(res => res.data)
}

export default {
    getAll
}
