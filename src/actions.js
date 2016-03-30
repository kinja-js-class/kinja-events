/*
 * action types
 */

export const REPLACE_EVENTS = 'REPLACE_EVENTS'
export const INSERT_EVENTS = 'INSERT_EVENTS'
export const SET_STARTDATE = 'SET_STARTDATE'
const DATA_FIELD = 'events'

/*
 * action creators
 */

import Firebase from 'firebase';

export function listenToFirebase() {
	return (dispatch, getState) => {
		const { firebaseURL, paginator } = getState()
		const firebase = new Firebase(firebaseURL)
		firebase
			.child(DATA_FIELD)
			.orderByChild("timestamp")
			.startAt(paginator.startDate)
			.endAt(paginator.startDate + 3600 * 15)
			.on('value', (snapshot) => {
				dispatch({type: REPLACE_EVENTS, events: snapshot.val() || {}});
			})
	}
}

export function setStartDate(d) {
	return {
		type: SET_STARTDATE,
		startDate: d
	}
}

export function addEvent(event) {
	return (dispatch, getState) => {
		const { firebaseURL, events } = getState()
		const firebase = new Firebase(firebaseURL)
		firebase.child(DATA_FIELD).push({...event, type: 'custom'})
	}
}

export function completeEvent(id) {
	return (dispatch, getState) => {
		const { firebaseURL, events } = getState()
		const firebase = new Firebase(firebaseURL)
		firebase.child(DATA_FIELD).child(id).update({completed: !events.list[id].completed})
	}
}

function insertEvents(json) {
	return {
		type: INSERT_EVENTS,
		events: json
	}
}
