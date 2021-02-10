import { all, takeLatest, takeEvery } from 'redux-saga/effects'

// TYPES
import { ActionTypes as AlertActionTypes } from './global/types'

// SAGAS
import { createAlert, deleteAlert } from './global/sagas'

export default function* rootSaga() {
  return yield all([
    takeEvery(AlertActionTypes.SET_ALERT, createAlert),
    takeEvery(AlertActionTypes.REMOVE_ALERT, deleteAlert)
  ])
}