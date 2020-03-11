const defaultState = {
  store: {
    title: "川香居",
    notice: "欢迎光临,很高兴为您服务",
    tags: ["味道赞", "主食真好", "分量足"]
  },
  active: [{
    type: "cut",
    info: [
      {
        man: 48,
        jian: 10
      },
      {
        man: 58,
        jian: 20
      },
      {
        man: 100,
        jian: 30
      },
      {
        man: 1000,
        jian: 1
      }
    ]
  }]
}
let headReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default headReducer;