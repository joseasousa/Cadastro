import { call, put } from 'redux-saga/effects'

import api from '../../services/api'
import { Creators as UserActions } from '../store/user'

export function * getUsers () {
  try {
    const response = yield call(api.get, '/users')

    yield put(UserActions.userSuccess(response.data))
  } catch (err) {
    yield put(UserActions.userFailure(err))
  }
}
