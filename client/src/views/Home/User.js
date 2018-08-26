import React from 'react'
import { Image, Table } from 'semantic-ui-react'

import moment from 'moment'

const User = ({ user }) => (
  <Table.Row>
    <Table.Cell>
      <div>
        <Image
          avatar
          src={user.file.url}
          width='50'
          alt={user.fir}
          default=''
        />
        <span>{`${user.first_name} ${user.last_name}`}</span>
      </div>
    </Table.Cell>
    <Table.Cell collapsing textAlign='right'>
      {moment(user.created_at)
        .format('D MMM, YYYY, HH:mm')}
    </Table.Cell>
  </Table.Row>
)

export default User
