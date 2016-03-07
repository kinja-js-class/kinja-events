import { combineReducers } from 'redux'
import { events } from './reducers/events'

const eventApp = combineReducers({
	events
})

export default eventApp
