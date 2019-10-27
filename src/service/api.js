import axios from 'axios'

const API_URL = 'http://localhost:8080'

function getAuthHeaders() {
    const token = localStorage.getItem('token')
    const key = localStorage.getItem('key')

    if (token && key) {
        return {
            'Authorization': 'Bearer_' + token,
            'Key': key
        }
    }
}

export function patch(endpoint, data, headers = {}) {
    const config = {
        headers: {
            ...headers,
            ...getAuthHeaders(),
        },
    }
    return axios.patch(API_URL + endpoint, data, config)
}

export function post(endpoint, data = {}, headers = {}) {
    const config = {
        headers: {
            ...headers,
            ...getAuthHeaders()
        }
    }
    return axios.post(API_URL + endpoint, data, config)
}

export function get(endpoint, data = {}, headers = {}) {
    const config = {
        headers: {
            ...headers,
            ...getAuthHeaders()
        },
        data: data
    }
    return axios.get(API_URL + endpoint, config)
}

export {API_URL}