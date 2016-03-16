import { connect } from 'react-redux'
import moment from 'moment'

import { addEvent } from '../actions'
import AddEvent from '../components/AddEvent'

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addEvent: (event) => {
			const timestamp = event.timestamp.length
				? moment(event.timestamp, 'HH:mm').format('X')
				: moment().format('X')

			dispatch(addEvent({
				...event,
				completed: false,
				timestamp: timestamp,
				type: 'custom'
			}))
		}
	}
}

const AddCustomEvent = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddEvent)

export default AddCustomEvent