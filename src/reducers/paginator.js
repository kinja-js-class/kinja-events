import { SET_STARTDATE } from '../actions'

const initialState = null;

export function paginator(state = initialState, action) {
	switch (action.type) {
		case SET_STARTDATE:
			return {...state, startDate: action.startDate}
		default:
			return state
	}
}
