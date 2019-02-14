const state = {
  counter: 0
}

const getters = {
  doubleCounter: state => {
    return state.counter * 2
  },
  stringCounter (state) {
    return state.counter + ' clicks'
  }
}

const mutations = {
  increment (state) {
    state.counter++
  },
  decrement (state) {
    state.counter--
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
