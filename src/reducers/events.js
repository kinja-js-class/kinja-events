import {
	INSERT_EVENTS, REPLACE_EVENTS
}
from '../actions'

const initialState = {
	list: {},
	status: 'LOADING',
	error: null
}

function loadedState(events) {
	return Object.assign({}, initialState, {
		status: 'LOADED',
		list: events
	})
}

export function events(state = initialState, action) {
	switch (action.type) {
		case INSERT_EVENTS:
			return Object.assign(
				{},
				state,
				loadedState(action.events)
			)
		case REPLACE_EVENTS:
			return Object.assign({}, loadedState(action.events))
		default:
			return state
	}
}