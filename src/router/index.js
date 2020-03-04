import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'DataView',
        component: () => import(/* webpackChunkName: "about" */ '../views/DataView.vue')
    },
    {
        path: '/user/:uid',
        name: 'DataView',
        component: () => import(/* webpackChunkName: "about" */ '../views/DataView.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
