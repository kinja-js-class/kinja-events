import { connect } from 'react-redux'
import moment from 'moment'

import { completeEvent } from '../actions'
import EventTimeline from '../components/EventTimeline'

const getVisibleEvents = (events) => {
	// TODO: filter event.type
	return {...events}
}

const mapStateToProps = (state) => {
	return {
		events: getVisibleEvents(state.events),
		startTime: parseInt(moment('08:00', 'HH:mm').format('X'), 10),
		endTime: parseInt(moment('24:00', 'HH:mm').format('X'), 10)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onEventClick: (id) => {
			dispatch(completeEvent(id))
		}
	}
}

const VisibleEventTimeline = connect(
	mapStateToProps,
	mapDispatchToProps
)(EventTimeline)

export default VisibleEventTimeline