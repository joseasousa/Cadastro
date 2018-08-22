'use strict'

const User = use('App/Models/User')

class UserController {
  async index () {
    const users = await User.query()
      .with('file')
      .fetch()

    return users
  }

  async store ({ request }) {
    const data = request.only([
      'first_name',
      'last_name',
      'company',
      'email',
      'password'
    ])

    const user = await User.create(data)
    return user
  }

  async show ({ params }) {
    const user = await User.findOrFail(params.id)

    await user.load('file')

    return user
  }

  async update ({ request, params }) {
    const user = await User.findOrFail(params.id)
    const data = request.only([
      'first_name',
      'last_name',
      'company',
      'email',
      'password',
      'file_id'
    ])

    user.merge(data)

    await user.save()

    return user
  }

  async destroy ({params}) {
    const user = await User.findOrFail(params.id)

    await user.delete()

    return 'Usuario deletado com susseso'
  }
}

module.exports = UserController
