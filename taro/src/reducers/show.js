const INITIAL_STATE = {
  num: 0
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return
    default:
      return state
  }
}