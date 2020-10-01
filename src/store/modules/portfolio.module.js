const state = {
    funds: 10000,
    portfolio: []
}

const getters = {
    getPortfolio: (state, getters) => {
        return state.portfolio.map(stockPortfolio => {
            const record = getters.getStocks.find(element => element.id === stockPortfolio.id)

            return {
                id: stockPortfolio.id,
                quantity: stockPortfolio.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    getFunds: state => {
        return state.funds
    }
}

const actions = {
    buyStocks({ commit }, { id, quantity, price }) {
        const portfolio = state.portfolio;

        const record = portfolio.find(stock => stock.id === id)

        if (record) {
            record.quantity += quantity
        } else {
            portfolio.push({
                id: id,
                quantity: quantity
            })
        }

        let funds = state.funds - price * quantity

        if (funds < 0) {
            alert('Not enough money!')

            return
        }

        commit('changePortfolio', portfolio);
        commit('changeFunds', funds)
    },
    sellStocks({ commit }, { id, quantity, price }) {
        const portfolio = state.portfolio

        const record = portfolio.find(stock => stock.id === id)

        if (record.quantity < quantity) {
            alert('Not enough stocks for this action!')

            return
        }

        record.quantity -= quantity

        const funds = state.funds + price * quantity

        commit('changePortfolio', portfolio)
        commit('changeFunds', funds)
    },
    setFunds({commit}, funds) {
        commit('changeFunds', funds)
    },
    setPortfolio({commit}, portfolio) {
        commit('changePortfolio', portfolio)
    }
}

const mutations = {
    changePortfolio (state, portfolio) {
        state.portfolio = portfolio
    },
    changeFunds (state, funds) {
        state.funds = funds
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
