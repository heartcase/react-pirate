import { actionTypes } from './constant'
import { put, takeEvery, call, takeLatest } from 'redux-saga/effects'
import { setValue, setText, loggedin } from './action'

import { sayHi } from '@api/greeting'
import { login } from '@api/login'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* setValueWaitWorker(action) {
  yield delay(action.time)
  yield put(setValue(action.value))
}

function* sayHiWorker() {
  const response = yield call(sayHi)
  yield put(setText(response.data.message))
}

function* loginWorker(action) {
  try {
    const response = yield call(login, { ...action })
    yield put(loggedin({ username: response.data.username, token: response.data.token }))
  }
  catch (error) {
    yield put(setText('Check your username/password'))
  }
}

export function* saga() {
  yield takeEvery(actionTypes.SET_VALUE_WAIT, setValueWaitWorker);
  yield takeEvery(actionTypes.GREETING, sayHiWorker);
  yield takeLatest(actionTypes.LOGIN, loginWorker)
}

export default saga