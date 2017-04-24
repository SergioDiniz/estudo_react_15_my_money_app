import axios from 'axios'

const API = "http://localhost:3003/api"

export const getList = () => {
    const request = axios.get(`${API}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request
    }
}

export const create = (value) => {
    const request = axios.post(`${API}/billingCycles`, value)
    return{
        type: 'TEMP'
    }
}