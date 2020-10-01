import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'landing',
        component: Landing
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue')
    },
    {
        path: '/stocks',
        name: 'stocks',
        component: () => import(/* webpackChunkName: "about" */ '../views/Stocks.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    linkActiveClass: 'active'
})

export default router
