<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light border rounded">
            <router-link
                :to="{ name: 'landing' }"
                class="navbar-brand"
            >Stock Trader
            </router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link
                            :to="{ name: 'portfolio' }"
                            class="nav-link"
                        >Portfolio
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            :to="{ name: 'stocks' }"
                            class="nav-link"
                        >Stocks
                        </router-link>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#"
                            @click="endDay"
                        >End Day</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Save & Load
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a
                                class="dropdown-item"
                                href="#"
                                @click="saveProgress"
                            >Save</a>
                            <a
                                class="dropdown-item"
                                href="#"
                                @click="loadProgress"
                            >Load</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Funds: {{ getFunds | currency }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';

export default {
    name: "AppHeader",
    computed: mapGetters(['getFunds', 'getStocks', 'getPortfolio']),
    methods: {
        endDay() {
            this.$store.dispatch('randomizeStockPrices')
        },
        saveProgress() {
            axios.put('https://stock-trader-18123.firebaseio.com/stocks.json', {
                funds: this.getFunds,
                stocks: this.getStocks,
                portfolio: this.getPortfolio
            })
        },
        loadProgress() {
            axios.get('https://stock-trader-18123.firebaseio.com/stocks.json')
                .then(response => {
                    if (! response.data) {
                        return
                    }

                    this.$store.dispatch('setStocks', response.data.stocks)
                    this.$store.dispatch('setFunds', response.data.funds)
                    this.$store.dispatch('setPortfolio', response.data.portfolio)
                })
        }
    }
}
</script>

<style scoped lang="scss">
header {
    margin-bottom: 20px;
}
</style>
