import axios from 'axios'
import https from 'https'

const apiService = axios.create({
  baseURL: 'https://localhost:44301', // Replace with your API base URL
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
})

export const setAuthToken = (token) => {
  if (token) {
    apiService.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete apiService.defaults.headers.common['Authorization']
  }
}

export default apiService
