import axios_auth from '../../axios-auth.js'
import axios_user from '../../axios-users.js'


const state = {
    idToken: null,
    userId: null,
    user: null
}

const getters = {
    user(state) {
        return state.user
    },
    isAuthenticated (state) {
        return state.idToken !== null
    }
}

const mutations = {
    authUser(state, userData) {
        state.idToken = userData.token
        state.userId = userData.userId
    },
    storeUser(state, user) {
        state.user = user
    },
    clearAuthData(state) {
        state.idToken = null
        state.userId = null
        state.user = null
    }
}

const actions = {
    signup({commit, dispatch}, authData) {
        const endpoint = '/signupNewUser?key='
        const key = 'AIzaSyB4wK1delsuV2YAsvXn6URcNfvCiXSMOlA'
        const postUrl = endpoint + key

        axios_auth.post(postUrl, {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            })
            .then(res => {
                console.log(res)
                commit('authUser', {
                    token: res.data.idToken,
                    userId: res.data.localId
                })
                authData.id = state.userId
                dispatch('storeUser', authData)
                authData.clear()
            })
            .catch(error => console.log(error))
    },
    login({ commit }, authData) {
        let endpoint = '/verifyPassword?key='
        let key = 'AIzaSyB4wK1delsuV2YAsvXn6URcNfvCiXSMOlA'
        let postUrl = endpoint + key

        axios_auth.post(postUrl, {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            })
            .then(res => {
                console.log(res)
                commit('authUser', {
                    token: res.data.idToken,
                    userId: res.data.localId
                })
                authData.clear()

            })
            .catch(error => console.log(error))
    },
    logout({commit}) {
        commit('clearAuthData')
    },
    storeUser({ commit, state }, userData ) {
        console.log("storeuser")
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
