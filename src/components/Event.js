import React, { Component, PropTypes } from 'react'
import moment from 'moment'

let formatTime = (timestamp) => moment(timestamp, 'X').format('HH:mm')

export default class Event extends Component {
	render() {
		return (
			<li
				onClick={this.props.onClick}
				className={this.props.completed ? 'completed' : ''}>
				{formatTime(this.props.timestamp)}: {this.props.text}
			</li>
		)
	}
}

Event.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	timestamp: PropTypes.string.isRequired
}
