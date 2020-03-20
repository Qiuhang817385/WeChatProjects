const defaultState = {
  foodCart: []
}
const mutations = {
  // 增加购物车,而不是购物车初始化
  foodCartAdd (state, item) {
    // foodCart = foods
    // 判断是否有,有的话+1,没有重新初始化
    const food = state.foodCart.find((value) => value.name == item.name);
    if (food) {
      // console.log(good);
      food.count++;
      // console.log("food", food)
    } else {
      state.foodCart.push({
        ...item,
        count: 1
      })
    }
  }
}

const action = {

}
const getters = {
  getItemCount: (state) => (item) => {
    const food = state.foodCart.find((value) => value.name == item.name);
    if (food.count) {
      return food.count;
    }
  }
}

export default {
  namespaced: true,
  action,
  mutations,
  getters,
  state: defaultState
}