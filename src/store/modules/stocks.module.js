const state = {
    stocks: []
}

const getters = {
    getStocks: state => {
        return state.stocks
    }
}

const mutations = {
    setStocks(state, stocks) {
        state.stocks = stocks
    }
}

const actions = {
    initStocks: ({commit}) => {
        commit('setStocks', [
            {id: 1, name: 'BMW', price: 90},
            {id: 2, name: 'Microsoft', price: 60},
            {id: 3, name: 'Apple', price: 130},
            {id: 4, name: 'Google', price: 110},
        ])
    },
    randomizeStockPrices: ({commit}) => {
        let stocks = state.stocks

        stocks.map(stock => stock.price = randomizePrice(stock.price))

        commit('setStocks', stocks)
    },
    setStocks({commit}, stocks) {
        commit('setStocks', stocks)
    }
}

function randomizePrice(currentPrice) {
    return Math.round(currentPrice * (1 + Math.random() - 0.5))
}

export default {
    state,
    getters,
    mutations,
    actions
}
