import React from 'react'
import { Table } from 'semantic-ui-react'

import User from './User'

const Users = ({ users }) => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell className='teal'>
          <strong className='teal'>Full Name</strong>
        </Table.HeaderCell>
        <Table.HeaderCell>Created at</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {users.map(u => (
        <User key={u.id} user={u} />
      ))}
    </Table.Body>
  </Table>
)

export default Users
