import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './views/Home'
import Add from './views/Add'

const App = () => (
  <Router>
    <Switch >
      <Route exact path='/' component={Home} />
      <Route path='/add' component={Add} />
    </Switch>
  </Router>
)

export default App
