import { actionTypes, actionCreators } from './action'
import { put, takeEvery, call, takeLatest } from 'redux-saga/effects'

import { sayHi } from '@api/greeting'
import { login } from '@api/login'
import { delay } from '@utils/promise'

const { setValue, setText, loggedin } = actionCreators

function* setValueWaitWorker(action) {
  yield delay(action.time)
  yield put(setValue({ value: action.value }))
}

function* sayHiWorker() {
  const response = yield call(sayHi)
  yield put(setText({ text: response.data.message }))
}

function* loginWorker(action) {
  try {
    const response = yield call(login, { ...action })
    yield put(loggedin({ username: response.data.username, token: response.data.token }))
  }
  catch (error) {
    yield put(setText({ text: 'Check your username/password' }))
  }
}

export function* saga() {
  yield takeEvery(actionTypes.setValueWait, setValueWaitWorker);
  yield takeEvery(actionTypes.sayHi, sayHiWorker);
  yield takeLatest(actionTypes.login, loginWorker)
}

export default saga