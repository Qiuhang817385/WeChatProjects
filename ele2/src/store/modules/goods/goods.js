const state = {
  goods: [],
  counta: 1,
  listHeight: [],
  Y: 0,
}
const mutations = {
  initGoods (state, goods) {
    console.log('123')
    state.goods = goods;
  },
  listAdd (state, height) {
    //  state.listHeight.concta = list
    state.listHeight.push(height);
  },
  musiy (state, doneY) {
    // state.Y = Math.abs(Math.round(pos.y))
    // console.log(state.Y)
    state.Y = doneY;
    // console.log(state.Y)
  }
}
const actions = {
  addS: ({ commit }) => {
    commit('add')
  }
}


export default {
  namespaced: true,
  actions,
  state,
  mutations,
}

// 取数据的时候$store.state.a.count
// 这个a就是index里面module里面的a