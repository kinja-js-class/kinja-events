import {
	ADD_EVENT, INSERT_EVENTS, REPLACE_EVENTS
}
from '../actions'

const initialState = {
	list: {},
	status: 'LOADING',
	error: null
}

function createEvent(newEvent) {
	return {
		id: Math.floor(Math.random() * 1000),
		text: action.event.text,
		completed: action.event.completed,
		timestamp: action.event.timestamp,
		severity: action.event.severity,
		type: 'custom',
		meta: {}
	}
}

function loadedState(events) {
	return Object.assign({}, initialState, {
		status: 'LOADED',
		list: events
	})
}

export function events(state = initialState, action) {
	switch (action.type) {
		case ADD_EVENT:
			return Object.assign(
				{},
				state,
				{
					list: [...state.list, createEvent(undefined, action)]
				}
			)
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