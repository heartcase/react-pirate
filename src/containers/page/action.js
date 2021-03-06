import { getActionCreators, getActionTypes } from '@utils/redux'
import { key } from './constant'

export const actionConfig = {
  setValue: { value: 0 },
  setValueWait: { value: 0, time: 1000 },
  setText: { text: '' },
  sayHi: {},
}

export const actionTypes = getActionTypes(actionConfig, key)

export const actionCreators = getActionCreators(actionConfig, key)