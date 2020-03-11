import { combineReducers } from 'redux'
import counter from './counter';
import testCart from './testCart'
import headReducer from './head/headReducer'
import { foodReducer, cataReducer } from './food/foodReducer'

export default combineReducers({
  counter,
  testCart,
  headReducer,
  foodReducer,
  cataReducer
})
