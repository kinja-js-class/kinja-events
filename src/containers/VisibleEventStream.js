import { connect } from 'react-redux'
import { completeEvent } from '../actions'
import EventStream from '../components/EventStream'

const getVisibleEvents = (events) => {
	// TODO: filter event.type
	return events
}

const mapStateToProps = (state) => {
	return {
		events: getVisibleEvents(state.events)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onEventClick: (id) => {
			dispatch(completeEvent(id))
		}
	}
}

const VisibleEventStream = connect(
	mapStateToProps,
	mapDispatchToProps
)(EventStream)

export default VisibleEventStream