import React, { Component, PropTypes } from 'react'
import Event from './Event'

export default class EventStream extends Component {
  render() {
    return (
      <ul className="eventstream">
        {this.props.events
            .sort((a, b) => { return a.timestamp - b.timestamp })
            .map((event, index) =>
                  <Event {...event}
                        key={index}
                        onClick={() => this.props.onEventClick(event)} />
                )}
      </ul>
    )
  }
}

EventStream.propTypes = {
  onEventClick: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}
