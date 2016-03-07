import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addEvent, completeEvent, fetchEvents } from './actions'
import EventStream from './components/EventStream'
import EventTimeline from './components/EventTimeline'
import AddEvent from './components/AddEvent'

export default class App extends Component {
	componentDidMount() {
		const { dispatch, selectedReddit } = this.props
		dispatch(fetchEvents())
	}
	render() {
		const { dispatch, visibleEvents, error, status } = this.props
		return (
			<div>
				<AddEvent
					onAddClick={event => dispatch(addEvent(event))} />
					{(status === 'ERROR' && error) ?
						<span className="error">{error}</span>
					:
						(status === 'LOADING') ?
							<span className="info">Loading events</span>
						:
							<div>
								<EventTimeline
										events={visibleEvents}
										startHour={9}
										endHour={19}
										onEventClick={index => dispatch(completeEvent(index))} />
								<EventStream
										events={visibleEvents}
										onEventClick={index => dispatch(completeEvent(index))} />
							</div>
						}
				</div>
		)
	}
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
	return {
		visibleEvents: state.events.list,
		status: state.events.status,
		error: state.events.error
	}
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App)
