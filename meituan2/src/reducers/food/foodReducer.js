const defaultState = {
  tabList: [{ title: "点菜" }, { title: "评论" }, { title: "商家" }],
  // 餐品数据存储
  // 没有餐品数据的情况下去后台去查
  foodList: [],
  cureentList: [],
  selectCata: null
}
export const foodReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
const cataState = {
  cata: [
    {
      name: "专场",
      id: 1
    },
    {
      name: "热销",
      id: 2
    },
    {
      name: "折扣",
      id: 3
    },
    {
      name: "主食",
      id: 4
    },
    {
      name: "热炒",
      id: 5
    },
    {
      name: "凉菜",
      id: 6
    },
    {
      name: "专属优惠",
      id: 7
    }
  ]
}
export const cataReducer = (state = cataState, action) => {
  switch (action.type) {
    default:
      return state
  }
}