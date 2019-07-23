import { actionTypes } from './action'
import { combineReducers } from 'redux'

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

const setUsername = (state = '', action) => {
  switch (action.type) {
    case actionTypes.loggedin:
      return action.username
    case actionTypes.logout:
      return ''
    default:
      return state
  }
}

const setToken = (state = '', action) => {
  switch (action.type) {
    case actionTypes.loggedin:
      return action.token
    case actionTypes.logout:
      return ''
    default:
      return state
  }
}

export const reducers = { value: setValue, text: setText, username: setUsername, token: setToken }

export default combineReducers(reducers)