<template>
    <div id="app">
        <div class="container">
            <app-header></app-header>

            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";

export default {
    components: {
        AppHeader
    },
    created() {
        this.$store.dispatch('initStocks')
    }
}

</script>

<style scoped>
.container {
    margin-top: 20px;
}

.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>
