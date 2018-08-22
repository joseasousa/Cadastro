import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import createStore from './redux'
import App from './App'

import 'semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
