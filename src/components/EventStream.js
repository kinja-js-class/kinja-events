import React, { Component, PropTypes } from 'react'
import Event from './Event'

const EventStream = ({ events, onEventClick }) => (
	<ul className="eventstream">
		{Object.keys(events.list)
			.map((key) =>
				<Event {...events.list[key]}
						key={key}
						onClick={() => onEventClick(key)} />
			)
		}
	</ul>
)

EventStream.propTypes = {
	onEventClick: PropTypes.func.isRequired,
	events: PropTypes.object.isRequired
}

export default EventStream