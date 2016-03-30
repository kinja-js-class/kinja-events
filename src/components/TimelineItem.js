import React, { Component, PropTypes } from 'react'
import moment from 'moment'

let formatTime = (timestamp) => moment.unix(timestamp).format('HH:mm')

export default class TimelineItem extends Component {
	render() {
		const eventClass = `event__label event__severity-${this.props.severity} ${this.props.completed ? ' event-completed' : ''}`

		return (
			<div className="event" onClick={this.props.onClick}>
				<div className={eventClass}>
					<header>
						<time>{formatTime(this.props.timestamp)}</time>
						{(this.props.meta && this.props.meta.user_name) ?
							<span>by @{this.props.meta.user_name}</span>
							:
							null
						}
					</header>
					{this.props.text}
				</div>
			</div>
		)
	}
}

TimelineItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	timestamp: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired
}
