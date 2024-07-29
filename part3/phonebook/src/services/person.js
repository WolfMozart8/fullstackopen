import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons"


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(res => res.data)
}

const add = (person) => {
    const request = axios.post(baseUrl, person)
    return request.then(res => res.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request
                .then(res => res.data)
                .catch(err => console.error(err))
}

const update = (id, updatedNumber) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedNumber)
    return request.then(res => res.data)
}


export default {
    getAll,
    add,
    remove,
    update,
}
