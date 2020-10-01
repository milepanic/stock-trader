<template>
    <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
    >
        <div class="col-md-6 d-inline-block mb-3" v-if="! isPortfolio || quantity > 0">
            <div class="card">
                <div
                    v-if="isPortfolio"
                    class="card-header card-header-portfolio"
                >
                    <strong>{{ name }}</strong> <small>(Price: {{ price }} | Quantity: {{ quantity }})</small>
                </div>
                <div
                    v-else
                    class="card-header card-header-buy"
                >
                    <strong>{{ name }}</strong> <small>(Price: {{ price }})</small>
                </div>
                <div class="card-body">
                    <stock-form
                        :id="id"
                        :price="price"
                        :is-portfolio="isPortfolio"
                        :quantity="quantity"
                    ></stock-form>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import StockForm from "@/components/stock/StockForm";

export default {
    name: "StockCard",
    components: {StockForm},
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: false
        },
        isPortfolio: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.card-header-buy {
    background-color: #DDF0D7;

    strong {
        color: #5d6c55;
    }
}

.card-header-portfolio {
    background-color: #c8e3ec;

    strong {
        color: #4682b4;
    }
}
</style>
