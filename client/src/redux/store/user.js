import { createReducer, createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  userRequest: null,
  userSuccess: ['data'],
  userFailure: ['error'],

  createUserRequest: ['data'],
  createUserSuccess: ['data'],
  createUserFailure: ['error']
})

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
  isSaving: false
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

const create = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: true,
  data: action.data,
  error: false,
  errorMessage: '',
  saved: false
})

const createSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: false,
  user: action.data,
  saved: true
})

const createFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isSaving: false,
  errorMessage: action.payload.error,
  saved: false
})

export default createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: request,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure,

  [Types.CREATE_USER_REQUEST]: create,
  [Types.CREATE_USER_SUCCESS]: createSuccess,
  [Types.CREATE_USER_FAILURE]: createFailure
})
