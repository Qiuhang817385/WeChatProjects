import { ADD_TEST, DEC_TEST } from '../constants/testCart'

const defaultState = {
  num: 0
}
export default function testCart (state = defaultState, action) {
  switch (action.type) {
    case ADD_TEST:
      return {
        ...state,
        num: state.num + 1
      }
    case DEC_TEST:
      return {
        ...state,
        num: state.num - 1
      }
    default:
      return state
  }
}