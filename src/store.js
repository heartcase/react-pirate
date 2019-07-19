import { createStore, applyMiddleware, compose  } from 'redux'
import createSagaMiddleware from 'redux-saga'

const reducer = (state = {}) => state
const sagaMiddleware = createSagaMiddleware()

// create store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

// init injected object
store.injectedReducers = {}
store.injectedSagas = {}
store.runSaga = sagaMiddleware.run;

export default store