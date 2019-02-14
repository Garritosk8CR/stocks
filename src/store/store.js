import Vue from 'vue'
import Vuex from 'vuex'
import Counter from './modules/counter'
import Stocks from './modules/stocks'
import Portfolio from './modules/portfolio'
import Auth from './modules/Auth'
//import Users from './modules/Users'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters,
  mutations,
  actions,
  modules: {
    Counter,
    Stocks,
    Portfolio,
    Auth

  }
})
