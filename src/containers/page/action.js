import { getActionCreators } from '@utils/action'

const actionConfig = {
  setValue: { type: 'SET_VALUE', value: 0 },
  setValueWait: { type: 'SET_VALUE_WAIT', value: 0, time: 1000 },
  setText: { type: 'SET_TEXT', text: '' },
  sayHi: { type: 'GREETING', },
  login: { type: 'LOGIN', username: null, password: null },
  login: { type: 'LOGGEDIN', username: null, token: null },
  logout: { type: 'LOGOUT', }
}

export default { ...getActionCreators(actionConfig) }
