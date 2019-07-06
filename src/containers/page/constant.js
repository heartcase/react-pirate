const actionTypes = {}
const addActionType = type => { actionTypes[type] = type }
addActionType('SET_VALUE')

export { actionTypes }