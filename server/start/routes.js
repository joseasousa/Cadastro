'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('users', 'UserController').apiOnly()
Route.post('sessions', 'SessionController.store')
Route.get('forgot', 'ForgotPasswordController.store')

Route.post('files', 'FileController.store')
Route.get('files/:id', 'FileController.show')
