const actionTypes = {}
const addActionType = type => { actionTypes[type] = type }
addActionType('SET_VALUE')
addActionType('SET_VALUE_WAIT')
addActionType('GREETING')
addActionType('SET_TEXT')
export { actionTypes }