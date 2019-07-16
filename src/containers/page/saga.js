import { actionTypes } from './constant'
import { put, takeEvery } from 'redux-saga/effects'
import { setValue } from './action'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* setValueWaitWorker (action) {
  yield delay(action.time)
  yield put(setValue(action.value))
}

export function* saga() {
  yield takeEvery(actionTypes.SET_VALUE_WAIT, setValueWaitWorker);
}

export default saga