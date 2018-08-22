import React from 'react'
import { Image, Table } from 'semantic-ui-react'
import Proptypes from 'prop-types'

const User = ({ user }) => (
  <Table.Row>
    <Table.Cell>
      <div>
        <Image avatar src={user.file.url} width='50' alt={user.fir} default='' />
        <span>{`${user.first_name} ${user.last_name}`}</span>
      </div>
    </Table.Cell>
    <Table.Cell collapsing textAlign='right'>
      {user.created_at}
    </Table.Cell>
  </Table.Row>
)

User.prototype = {
  user: Proptypes
}

export default User
