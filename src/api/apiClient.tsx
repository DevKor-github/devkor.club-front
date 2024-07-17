import axios from 'axios'

// const BASE_URL = process.env.API_URL
const BASE_URL = 'https://api.devkor.club'

// API client 설정
export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})
