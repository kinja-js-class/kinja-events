import React from 'react'
import { render } from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App'
import eventApp from './reducers'
import moment from 'moment'
import DevTools from './components/DevTools'

let mockDate = (timeStr) => parseInt(moment(timeStr, 'HH:mm').format('X'), 10)

let store = createStore(eventApp, compose(applyMiddleware(thunk), DevTools.instrument()))

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <div>
        <DevTools />
        <App />
    </div>
  </Provider>,
  rootElement
)
