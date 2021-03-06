'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table
        .string('first_name', 80)
        .notNullable()
      table
        .string('last_name', 80)
        .notNullable()
      table
        .string('email', 254)
        .notNullable()
        .unique()
      table
        .string('company', 254)
        .notNullable()
      table.string('password', 60).notNullable()
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')

      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
