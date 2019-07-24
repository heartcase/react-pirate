import { actionTypes } from './action'
import { put, call, takeLatest } from 'redux-saga/effects'

import { login } from '@api/login'
import { actionCreators } from '@global/action'

const { loggedin } = actionCreators

function* loginWorker(action) {
  try {
    const response = yield call(login, { ...action })
    yield put(loggedin({ username: response.data.username, token: response.data.token }))
  }
  catch (error) { }
}

export function* saga() {
  yield takeLatest(actionTypes.login, loginWorker)
}

export default saga