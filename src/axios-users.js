import axios from 'axios'

const axios_users = axios.create({
    baseURL: 'https://airborne-43653.firebaseio.com/'
})

export default axios_users
