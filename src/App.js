import React, { Component } from 'react'
import EventStream from './EventStream'

export default class App extends Component {
  render() {
    return (
      <div>
        <EventStream
          events={
            [
              {
                text: 'Use Redux',
                completed: true
              },
              {
                text: 'Learn to connect it to React',
                completed: false
              }
            ]
          }
          onEventClick={index =>
            console.log('event clicked', index)
          } />
      </div>
    )
  }
}
