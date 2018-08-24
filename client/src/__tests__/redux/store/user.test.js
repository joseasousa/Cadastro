import reducer, { Creators as UserActions } from '../../../redux/store/user'

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null
}

describe('Todo User', () => {
  it('shoud able to request', () => {
    const state = reducer(INITIAL_STATE, UserActions.userRequest())

    expect(state.loading).toBe(true)
  })

  it('shoud request success', () => {
    const state = reducer(
      INITIAL_STATE,
      UserActions.userSuccess([{ id: 1, name: 'test' }])
    )

    expect(state.data).toHaveLength(1)
  })

  it('shoud request success', () => {
    const state = reducer(INITIAL_STATE, UserActions.userFailure('error'))

    expect(state.error).toBe('error')
  })

  it('should create user', () => {
    const state = reducer(
      INITIAL_STATE,
      UserActions.createUserRequest({ id: 1, name: 'test' })
    )

    expect(state.data.id).toBe(1)
  })
})
