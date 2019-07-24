import { actionTypes } from './action'
import { combineReducers } from 'redux'

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

export const reducers = {
  username: setUsername,
  token: setToken
}


export default combineReducers(reducers)