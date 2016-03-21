import { combineReducers } from 'redux'
import { firebaseURL } from './reducers/firebase'
import { events } from './reducers/events'
import { paginator } from './reducers/paginator'

const eventApp = combineReducers({
	firebaseURL,
	events,
	paginator
})

export default eventApp
