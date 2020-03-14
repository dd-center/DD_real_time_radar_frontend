import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueBlu from 'vue-blu'
// import 'vue-blu/dist/css/vue-blu.min.css'
// Vue.use(VueBlu)
// run npm add core-js
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    },
    {
        path: '/user/:uid',
        name: 'User',
        component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
