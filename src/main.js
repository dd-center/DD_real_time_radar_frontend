import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ECharts from 'vue-echarts'
import axios from 'axios'
import './index.scss'

Vue.component('chart', ECharts)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
