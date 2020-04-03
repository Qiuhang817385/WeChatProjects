import { shop } from './service'
const defaultState = {
  sellerApp: {},
}
const mutations = {
  test (state) {
    console.log(state.sss);
  }
}
const actions = {
  setAPI: ({ commit }) => {
    commit('test');
    console.log(shop.name)
  }
}
const getters = {

}

export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state: defaultState
}