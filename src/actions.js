/*
 * action types
 */

export const REPLACE_EVENTS = 'REPLACE_EVENTS'
export const ADD_EVENT = 'ADD_EVENT'
export const COMPLETE_EVENT = 'COMPLETE_EVENT'
export const INSERT_EVENTS = 'INSERT_EVENTS'

/*
 * action creators
 */

import Firebase from 'firebase';

function replaceEvents(events) {
	return {
		type: REPLACE_EVENTS,
		events
	}
}

export function listenToFirebase() {
	return (dispatch, getState) => {
		const { firebaseURL } = getState()
		const firebase = new Firebase(firebaseURL)
		firebase.child('events').on('value', (snapshot) => {
			dispatch(replaceEvents(snapshot.val()));
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
	return {
		type: COMPLETE_EVENT,
		id: id
	}
}

function insertEvents(json) {
	return {
		type: INSERT_EVENTS,
		events: json
	}
}