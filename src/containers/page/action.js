import { actionTypes } from './constant'

const setValue = value => ({
  value,
  type: actionTypes.SET_VALUE
})

export default { setValue }
 