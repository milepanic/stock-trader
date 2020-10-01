<template>
    <div>
        <stock-card
            v-for="stock in getPortfolio"
            :key="stock.id"
            :id="stock.id"
            :name="stock.name"
            :price="stock.price"
            :quantity="stock.quantity"
            :is-portfolio="true"
        ></stock-card>
    </div>
</template>

<script>
import StockCard from "@/components/stock/StockCard";
import { mapGetters } from 'vuex';

export default {
    name: "Portfolio",
    components: {
        StockCard
    },
    computed: mapGetters(['getPortfolio']),
}
</script>
