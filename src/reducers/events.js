import {
	ADD_EVENT, INSERT_EVENTS, COMPLETE_EVENT, REPLACE_EVENTS
}
from '../actions'

const initialState = {
	list: {},
	status: 'LOADING',
	error: null
}

function changeEvent(state, action) {
	switch (action.type) {
		case ADD_EVENT:
			return {
				id: Math.floor(Math.random() * 1000),
				text: action.event.text,
				completed: action.event.completed,
				timestamp: action.event.timestamp,
				severity: action.event.severity
			}
		case COMPLETE_EVENT:
			if (state !== action.id) {
				return state
			}

			return {
				...state,
				completed: !state.completed
			}
		default:
			return state
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
					list: [...state.list, changeEvent(undefined, action)]
				}
			)
		case COMPLETE_EVENT:
			return Object.assign(
				{},
				state,
				{
					list: Object.keys(state.list).map(t => changeEvent(t, action))
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