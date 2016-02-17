import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App'
import eventApp from './reducers'
import moment from 'moment'

let mockDate = (timeStr) => parseInt(moment(timeStr, 'HH:mm').format('X'), 10)

let initialEvents = [
    /*
    {id: 1, text: 'kinja-mantle #6246 deploy', completed: true, severity: 'info', timestamp: mockDate('9:35')},
    {id: 2, text: 'kinja-mantle #6247 deploy failed', completed: false, severity: 'alert', timestamp: mockDate('11:35')},
    {id: 3, text: 'kinja-mantle #6248 deploy', completed: false, severity: 'info', timestamp: mockDate('11:42')},
    {id: 4, text: 'kinja-profile #627 deploy', completed: false, severity: 'info', timestamp: mockDate('15:20')},
    {id: 5, text: 'kinja-mantle #6246 deploy', completed: false, severity: 'info', timestamp: mockDate('15:22')},
    {id: 6, text: 'replication lag at +2sec', completed: false, severity: 'alert', timestamp: mockDate('15:27')},
    {id: 7, text: 'kinja-core #1246 deploy', completed: false, severity: 'info', timestamp: mockDate('15:25')},
    */
]
let store = createStore(eventApp, {events: initialEvents}, applyMiddleware(thunk))

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
