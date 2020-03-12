import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 配置axios
import axios from 'axios';
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
