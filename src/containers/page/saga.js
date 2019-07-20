import { actionTypes } from './constant'
import { put, takeEvery, call } from 'redux-saga/effects'
import { setValue, setText } from './action'

import { sayHi } from '@api/greeting'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* setValueWaitWorker(action) {
  yield delay(action.time)
  yield put(setValue(action.value))
}

function* sayHiWorker() {

  const response = yield call(sayHi)
  yield put(setText(response.data.message))
}

export function* saga() {
  yield takeEvery(actionTypes.SET_VALUE_WAIT, setValueWaitWorker);
  yield takeEvery(actionTypes.GREETING, sayHiWorker);
}

export default saga