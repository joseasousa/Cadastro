import React, { Fragment } from 'react'

import { Route, Switch } from 'react-router-dom'
import ImageForm from './ImageForm'
import UserFrom from './UserForm'

const Add = ({ match }) => (
  <Fragment>
    <Switch>
      <Route path={`${match.path}/`} exact component={UserFrom} />
      <Route path={`${match.path}/formImage`} exact component={ImageForm} />
    </Switch>
  </Fragment>
)

export default Add
