import Vue from 'vue'
import Vuex from 'vuex'
import goods from './modules/goods/goods';
import cart from './modules/cart/cart';
import app from './modules/app/app'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    goods,
    cart
  }
})
