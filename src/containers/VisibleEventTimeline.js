import { connect } from 'react-redux'

import { completeEvent } from '../actions'
import EventTimeline from '../components/EventTimeline'

const getVisibleEvents = (events) => {
	let newevents = Object.keys(events.list).reduce((acc, k) => {
		if (events.list[k].type !== 'slack' || events.list[k].text.indexOf('/changelog') !== -1) {
			events.list[k].text = events.list[k].text.replace('/changelog', '');
			acc[k] = events.list[k]
		}
		return acc
	}, {})
	return {...Object.assign({}, events, {list: newevents})}
}

const mapStateToProps = (state) => {
	return {
		events: getVisibleEvents(state.events),
		startTime: state.paginator.startDate,
		endTime: state.paginator.startDate + 3600 * 15
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
