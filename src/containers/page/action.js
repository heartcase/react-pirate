import { actionTypes } from './constant'

export const setValue = value => ({
  value,
  type: actionTypes.SET_VALUE
})

export const setText = text => ({
  text,
  type: actionTypes.SET_TEXT
})

export const setValueWait = (value, time = 1000) => ({
  value,
  time,
  type: actionTypes.SET_VALUE_WAIT
})

export const sayHi = () => ({
  type: actionTypes.GREETING
})

export default { setValue, setValueWait, setText, sayHi, }
