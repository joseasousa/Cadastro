import { createReducer, createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  userRequest: null,
  userSuccess: ['data'],
  userFailure: ['error']
})

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null
}

const request = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true
})

const success = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  data: action.data
})

const failure = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: action.error
})

export default createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: request,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure
})
