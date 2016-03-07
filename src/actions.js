/*
 * action types
 */

export const ADD_EVENT = 'ADD_EVENT'
export const COMPLETE_EVENT = 'COMPLETE_EVENT'
export const INSERT_EVENTS = 'INSERT_EVENTS'
export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_FAILED = 'FETCH_FAILED'

/*
 * action creators
 */

let nextEventId = 0;

export function addEvent(event) {
	return {
		type: ADD_EVENT,
		event
	};
}

export function completeEvent(event) {
	return {
		type: COMPLETE_EVENT,
		id: event.id
	}
}

function insertEvents(json) {
	return {
		type: INSERT_EVENTS,
		events: json
	}
}

function fetchRequest() {
	return {
		type: 'FETCH_REQUEST'
	}
}

function fetchFailed() {
	return {
		type: 'FETCH_FAILED',
		message: 'CSAK'
	}
}

export function fetchEvents() {
	return (dispatch, getState) => {
		dispatch(fetchRequest())
		let url = 'http://localhost:3000/deploy'
		let options = { mode: 'cors' }
		return fetch(url, options)
			.then(response => response.json())
			.then(json => dispatch(insertEvents(json)))
			.catch(() => dispatch(fetchFailed()))
	}
}