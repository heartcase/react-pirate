import { actionTypes } from './action'
import { combineReducers } from 'redux'
import { ObjectIsEmpty } from '@utils/object'

const setValue = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.setValue:
      return action.value
    default:
      return state
  }
}

const setText = (state = '', action) => {
  switch (action.type) {
    case actionTypes.setText:
      return action.text
    default:
      return state
  }
}

export const reducers = { value: setValue, text: setText }


export default ObjectIsEmpty(reducers) ? {} : combineReducers(reducers)