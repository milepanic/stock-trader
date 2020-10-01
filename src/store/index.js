import Vue from 'vue'
import Vuex from 'vuex'
import stocks from "@/store/modules/stocks.module";
import portfolio from "@/store/modules/portfolio.module";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        stocks,
        portfolio
    }
})
