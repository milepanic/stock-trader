<template>
    <form class="form-inline justify-content-between">
        <input
            type="number"
            placeholder="Quantity"
            class="form-control col-md-9"
            v-model.number="selectedQuantity"
            min="0"
            :max="quantity"
            style="width: 100%;"
        >
        <button
            v-if="isPortfolio"
            class="btn btn-danger col-md-2"
            @click.prevent="sellStocks"
            @keyup.enter="sellStocks"
        >Sell</button>
        <button
            v-else
            class="btn btn-success col-md-2"
            @click.prevent="buyStocks"
            @keyup.enter="buyStocks"
        >Buy</button>
    </form>
</template>

<script>
export default {
    name: "StockForm",
    props: {
        id: {
            type: Number,
            required: true
        },
        isPortfolio: Boolean,
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: false
        }
    },
    data() {
        return {
            selectedQuantity: null
        }
    },
    methods: {
        buyStocks () {
            if (this.selectedQuantity <= 0) {
                alert('Invalid number')

                return
            }

            this.$store.dispatch(
                'buyStocks',
                {
                    id: this.id,
                    quantity: this.selectedQuantity,
                    price: this.price
                }
            )

            this.selectedQuantity = null
        },
        sellStocks () {
            if (this.selectedQuantity <= 0) {
                alert('Invalid number')

                return
            }

            this.$store.dispatch(
                'sellStocks',
                {
                    id: this.id,
                    quantity: this.selectedQuantity,
                    price: this.price
                }
            );

            this.selectedQuantity = null
        }
    }
}
</script>

<style scoped>

</style>
