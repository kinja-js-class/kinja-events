import { combineReducers } from 'redux'
import { firebaseURL } from './reducers/firebase'
import { events } from './reducers/events'

const eventApp = combineReducers({
	firebaseURL,
	events
})

export default eventApp
