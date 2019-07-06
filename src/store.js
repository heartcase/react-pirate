import { createStore } from 'redux'

const reducer = (state = {}) => state
const store = createStore(reducer)
store.injectedReducers = {}

export default store