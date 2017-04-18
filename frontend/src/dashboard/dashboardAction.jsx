import axios from 'axios'

const API = "http://localhost:3003/api"

export const getSummary = () => {
    const request = axios.get(`${API}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}