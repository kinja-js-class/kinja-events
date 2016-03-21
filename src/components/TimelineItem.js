import React, { Component, PropTypes } from 'react'
import moment from 'moment'

let formatTime = (timestamp) => moment.unix(timestamp).format('HH:mm')

export default class TimelineItem extends Component {
	render() {
		const eventClass = `event__label event__severity-${this.props.severity} ${this.props.completed ? ' event-completed' : ''}`

		return (
			<div className="event" style={{width: this.props.widthPercentage + '%'}} onClick={this.props.onClick}>
				<div className={eventClass}>
					{formatTime(this.props.timestamp)}: {this.props.text}
				</div>
			</div>
		)
	}
}

TimelineItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	widthPercentage: PropTypes.number.isRequired,
	timestamp: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired
}
