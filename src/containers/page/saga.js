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

export function* saga() {
  yield takeEvery(actionTypes.setValueWait, setValueWaitWorker);
  yield takeEvery(actionTypes.sayHi, sayHiWorker);
}

export default saga