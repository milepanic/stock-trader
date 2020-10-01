<template>
    <div>
        <stock-card
            v-for="stock in getStocks"
            :key="stock.id"
            :id="stock.id"
            :name="stock.name"
            :price="stock.price"
            :is-portfolio="false"
        ></stock-card>
    </div>
</template>

<script>
import StockCard from "@/components/stock/StockCard";
import { mapGetters } from 'vuex';

export default {
    name: "Stocks",
    components: {
        StockCard
    },
    computed: mapGetters(['getStocks'])
}
</script>
