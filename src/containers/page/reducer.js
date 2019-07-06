import { actionTypes } from './constant'
import { combineReducers } from 'redux'

const setValue = (state=0, action) => {
  switch (action.type) {
    case actionTypes.SET_VALUE:
      return action.value
    default:
      return state
  }
}

export default combineReducers({ value: setValue})