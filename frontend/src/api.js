import axios from 'axios'

const API = axios.create({
    baseURL: 'https://portfolio-backend-aqbh.onrender.com'
})

export default API