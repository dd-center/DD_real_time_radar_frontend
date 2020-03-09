import Vue from 'vue'
import VueRouter from 'vue-router'
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'
Vue.use(VueBlu)
// run npm add core-js
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
        component: () => import(/* webpackChunkName: "about" */ '../views/Users.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
