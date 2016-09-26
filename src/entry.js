import { render } from 'react-dom'
import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools'
import createLogger from 'redux-logger'


import { App } from './components'
import reducer from './reducers/'
import './global/global.less'

const loggerMiddleware = createLogger()
let store = createStore(reducer, compose(
  applyMiddleware(thunk, loggerMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))
devTools.updateStore()
render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementsByTagName('div')[0])

if (module.hot) {
  module.hot.accept()
}
