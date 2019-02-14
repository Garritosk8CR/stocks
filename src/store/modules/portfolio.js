const state = {
  funds: 10000,
  stocks: []
}

const getters = {
  stockPortfolio (state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id)
      return createFullStockRecord(stock, record)
    })
  },
  funds (state) {
    return state.funds
  }
}
function createStockRecord (id, quantity) {
  return {
    id,
    quantity
  }
}
function createFullStockRecord ({ id, quantity }, { name, price, img }) {
  return {
    ...createStockRecord(id, quantity),
    name,
    price,
    img
  }
}
function updateMyStock (stockRecord, quantity) {
  stockRecord.quantity += quantity
}
function addNewStockRecord (newRecord) {
  state.stocks.push(newRecord)
}

var findStockRecord = (stockId) => {
  return state.stocks.find(element => element.id == stockId)
}

function sellEntireStock (stockRecord) {
  state.stocks.splice(state.stocks.indexOf(stockRecord), 1)
}
function sellPartOfStock (stockRecord, sellorderQuantity) {
  stockRecord.quantity -= sellorderQuantity
}
function updateFunds (newFundsValue) {
  state.funds = newFundsValue
}

const mutations = {
  'BUY_STOCK' (state, { stockId, stockPrice, quantity }) {
    const recordFound = findStockRecord(stockId)

    if (recordFound) {
      updateMyStock(recordFound, quantity)
    } else {
      addNewStockRecord(createStockRecord(stockId, quantity))
    }

    updateFunds((state.funds - (stockPrice * quantity)))
  },
  'SELL_STOCK' (state, { stockId, stockPrice, quantity }) {
    const recordFound = findStockRecord(stockId)

    if (recordFound.quantity > quantity) {
      sellPartOfStock(recordFound, quantity)
    } else {
      sellEntireStock(recordFound, quantity)
    }

    updateFunds(state.funds + (stockPrice * quantity))
  },
  'SET_PORTFOLIO' (state, portfolio) {
    state.funds = portfolio.funds
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
  }
}
const actions = {
  sell_Stock ({ commit }, order) {
    commit('SELL_STOCK', order)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
