import { actionTypes } from './constant'

export const setValue = value => ({
  value,
  type: actionTypes.SET_VALUE
})

export const setValueWait = (value, time=1000) => ({
  value,
  time,
  type: actionTypes.SET_VALUE_WAIT
})

export default { setValue, setValueWait }
 