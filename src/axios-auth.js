import axios from 'axios'

const axios_auth = axios.create({
    baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
})

export default axios_auth
