import axios_user from '../../axios-users.js'

const state = {
    user: null
}

const getters = {
    user(state) {
        return state.user
    }
}

const mutations = {
    storeUser(state, user) {
        state.user = user
    }
}

const actions = {
    storeUser({ commit, state }, userData ) {

        if(!state.idToken) return;

        let endPoint = 'users.json'
        let authUrl = '?auth='

        authUrl+= state.idToken
        let postUrl = endPoint + authUrl

        axios_user.post(postUrl, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    fetchUser({ commit, state }) {
        console.log(state.idToken)
        if(!state.idToken) return;

        let endPoint = 'users.json'
        let authUrl = '?auth='

        authUrl+= state.idToken
        let getUrl = endPoint + authUrl
        axios_user.get(getUrl)
        .then(res => {
            const data = res.data
            const users = []
            for (let key in data) {
                const user = data[key]
                users.push(user)
            }
            commit('storeUser', users[0])
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
