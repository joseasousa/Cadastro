import { all, takeLatest } from 'redux-saga/effects'

import { Types as UserTypes } from '../store/user'

import { getUsers, postUser } from './user'

export default function * rootSaga () {
  return yield all([
    takeLatest(UserTypes.USER_REQUEST, getUsers),
    takeLatest(UserTypes.CREATE_USER_REQUEST, postUser)
  ])
}
