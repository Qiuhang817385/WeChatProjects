import { ADD_TEST, DEC_TEST } from '../constants/testCart'

export const add = () => ({ type: ADD_TEST })
export const dec = () => ({ type: DEC_TEST })