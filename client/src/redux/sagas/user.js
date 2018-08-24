import { call, put } from 'redux-saga/effects'

import api from '../../services/api'
import { Creators as UserActions } from '../store/user'

export function * getUsers () {
  try {
    const response = yield call(api.get, '/users')

    yield put(UserActions.userSuccess(response.data))
  } catch (err) {
    yield put(UserActions.userFailure(err.message))
  }
}

export function * postUser (action) {
  const userToSave = {
    ...action.data
  }

  console.log(userToSave)

  const user = yield api.post('users', userToSave)

  if (user && user.data && user.data.error) {
    yield put(UserActions.createUserFailure(user.data.message))
  } else {
    yield put(UserActions.createUserSuccess(user.data))
  }
}
