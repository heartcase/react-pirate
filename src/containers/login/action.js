import { getActionCreators, getActionTypes } from '@utils/redux'
import { key } from './constant'

export const actionConfig = {
  login: { username: null, password: null },
}

export const actionTypes = getActionTypes(actionConfig, key)

export const actionCreators = getActionCreators(actionConfig, key)