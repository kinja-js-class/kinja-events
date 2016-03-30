import React, {
	Component, PropTypes
}
from 'react'
import Event from './Event'
import TimelineItem from './TimelineItem'
import moment from 'moment'

const incrementBy = 30 * 60

export default class EventStream extends Component {

	render() {

		const startTime = moment.unix(this.props.startTime)
		const endTime = moment.unix(this.props.endTime)
		const rowCount = Math.round(endTime.diff(startTime, 'hours', true) * 2)
		const startTimes = Array.from({length: rowCount}, (v, k) => startTime.clone().add(30 * (k + 1), 'minutes'))

		const calendarRows = startTimes.map((rowStartTime, index, arr) => {
			const eventList = this.props.events.list
			return {
				start: rowStartTime,
				eventIDs: Object.keys(eventList).filter((eventID) => moment.unix(eventList[eventID].timestamp).isBetween(rowStartTime, (arr[index + 1] || endTime)))
			}
		})

		return (
			<ul className="timeline">
				{calendarRows.map((row, index) =>
					<li key={index}>
						<div className="timeline__time">{row.start.format('HH:mm')}</div>
						<div className="timeline__events">
							{row.eventIDs
								.map((eventID, eventindex) =>
									<TimelineItem {...this.props.events.list[eventID]}
											key={eventindex}
											onClick={() => this.props.onEventClick(eventID)} />
									)
							}
						</div>
					</li>
				)}
			</ul>
		)
	}
}

EventStream.propTypes = {
	onEventClick: PropTypes.func.isRequired,
	startTime: PropTypes.number.isRequired,
	endTime: PropTypes.number.isRequired,
	events: PropTypes.object.isRequired
}
