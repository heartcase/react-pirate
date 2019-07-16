import { createStore, applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga'

const reducer = (state = {}) => state
const sagaMiddleware = createSagaMiddleware()
// create store
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
store.injectedReducers = {}
store.injectedSagas = {}
store.runSaga = sagaMiddleware.run;
export default store