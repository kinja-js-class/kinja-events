/*
 * action types
 */

export const REPLACE_EVENTS = 'REPLACE_EVENTS'
export const INSERT_EVENTS = 'INSERT_EVENTS'
const DATA_FIELD = 'events'

/*
 * action creators
 */

import Firebase from 'firebase';

export function listenToFirebase() {
	return (dispatch, getState) => {
		const { firebaseURL } = getState()
		const firebase = new Firebase(firebaseURL)
		firebase.child(DATA_FIELD).on('value', (snapshot) => {
			dispatch({type: REPLACE_EVENTS, events: snapshot.val()});
		})
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