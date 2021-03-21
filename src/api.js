import axios from 'axios';
export function getAll(resource) {
    return axios.get(`http://localhost:3001/${resource}`)
}

export function getById(resource, id) {
    return axios.get(`http://localhost:3001/${resource}/${id}`)
}

export function getByCategory(resource, category) {
    return axios.get(`http://localhost:3001/${resource}/category/${category}`)
}

export function postData(resource, data) {
    return axios.post(`http://localhost:3001/${resource}/addNew/`, {...data})
}





