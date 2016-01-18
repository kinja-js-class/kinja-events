import React, { Component, PropTypes } from 'react'
import Event from './Event'

export default class EventStream extends Component {
  render() {
    return (
      <ul>
        {this.props.events.map((event, index) =>
          <Event {...event}
                key={index}
                onClick={() => this.props.onEventClick(index)} />
        )}
      </ul>
    )
  }
}

EventStream.propTypes = {
  onEventClick: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}