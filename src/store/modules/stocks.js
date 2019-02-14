import data_stocks from './Data/Stocks'
const state = {
  stocks: []
}

const getters = {
  stocks: state => {
    return state.stocks
  }
}
var setRandomPrice = stock => {
  var higherChance = 0.9
  var lowerChance = 0.2

  var higher_PricePosibility = higherChance + Math.random()
  var lower_PricePosibility = Math.random() - lowerChance

  if (stock.price < 75) {
    lower_PricePosibility = 0
    higher_PricePosibility += 0.8
  }

  if (stock.price > 7000) {
    lower_PricePosibility += 0.2
    higher_PricePosibility = 1
  }

  var randomNumber = higher_PricePosibility - lower_PricePosibility
  var oldPrice = stock.price

  var newPrice = Math.round(oldPrice * randomNumber) // to have integer number

  stock.price = newPrice
}
const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks
  },
  'RANDOM_STOCKS' (state) {
    // implement this after 1 match in screaming eagles
    state.stocks.forEach(setRandomPrice)
  }
}
const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order)
  },
  initStocks: ({ commit }, data) => {
    commit('SET_STOCKS', data_stocks)
  },
  randomizeStocks: ({ commit }) => {
    commit('RANDOM_STOCKS')
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
