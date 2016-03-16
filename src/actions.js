/*
 * action types
 */

export const REPLACE_EVENTS = 'REPLACE_EVENTS'
export const ADD_EVENT = 'ADD_EVENT'
export const INSERT_EVENTS = 'INSERT_EVENTS'

/*
 * action creators
 */

import Firebase from 'firebase';

export function listenToFirebase() {
	return (dispatch, getState) => {
		const { firebaseURL } = getState()
		const firebase = new Firebase(firebaseURL)
		firebase.child('events').on('value', (snapshot) => {
			dispatch({type: REPLACE_EVENTS, events: snapshot.val()});
		})
	}
}

export function addEvent(event) {
	return {
		type: ADD_EVENT,
		event
	};
}

export function completeEvent(id) {
	return (dispatch, getState) => {
		const { firebaseURL, events } = getState()
		const firebase = new Firebase(firebaseURL)
		firebase.child('events').child(id).update({completed: !events.list[id].completed})
	}
}

function insertEvents(json) {
	return {
		type: INSERT_EVENTS,
		events: json
	}
}