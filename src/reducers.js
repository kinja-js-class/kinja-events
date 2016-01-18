import { combineReducers } from 'redux'
import { ADD_EVENT, COMPLETE_EVENT, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function event(state, action) {
  switch (action.type) {
    case ADD_EVENT:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case COMPLETE_EVENT:
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: true
      }
    default:
      return state
  }
}

function events(state = [], action) {
  switch (action.type) {
    case ADD_EVENT:
      return [
        ...state,
        event(undefined, action)
      ]
    case COMPLETE_EVENT:
      return state.map(t =>
        event(t, action)
      )
    default:
      return state
  }
}

const eventApp = combineReducers({
  visibilityFilter,
  events
})

export default eventApp