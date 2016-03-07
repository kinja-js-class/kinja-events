import {
	ADD_EVENT, INSERT_EVENTS, COMPLETE_EVENT, FETCH_FAILED, FETCH_REQUEST
}
from '../actions'

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
			if (state.id !== action.id) {
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

let initialState = {
	list: [],
	status: 'LOADING',
	error: null
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
					list: state.list.map(t => changeEvent(t, action))
				}
			)
		case INSERT_EVENTS:
			return Object.assign(
				{},
				state,
				{
					status: 'LOADED',
					error: null,
					list: action.events
				}
			)
		case FETCH_REQUEST:
			return Object.assign(
				{},
				state,
				{
					status: 'LOADING'
				}
			)
		case FETCH_FAILED:
			return Object.assign(
				{},
				state,
				{
					status: 'ERROR',
					error: action.message
				}
			)
		default:
			return state
	}
}