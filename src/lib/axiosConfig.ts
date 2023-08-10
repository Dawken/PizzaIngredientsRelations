import axios from 'axios'

const localHost = process.env.REACT_APP_BACKEND_HOST

const lignumSoftBackend = axios.create({
    baseURL: localHost,
    withCredentials: true,
})

export default lignumSoftBackend
