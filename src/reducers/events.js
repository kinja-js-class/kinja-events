import { ADD_EVENT, INSERT_EVENTS, COMPLETE_EVENT } from '../actions'

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

export function events(state = [], action) {
  switch (action.type) {
    case ADD_EVENT:
      return [
        ...state,
        changeEvent(undefined, action)
      ]
    case COMPLETE_EVENT:
      return state.map(t =>
        changeEvent(t, action)
      )
    case INSERT_EVENTS:
        return action.events
    default:
      return state
  }
}
