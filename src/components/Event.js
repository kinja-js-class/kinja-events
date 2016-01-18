import React, { Component, PropTypes } from 'react'

export default class Event extends Component {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        className={this.props.completed ? 'completed' : ''}>
        {this.props.text}
      </li>
    )
  }
}

Event.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}