import { combineReducers } from 'redux'
import { visibilityFilter } from './reducers/visibilityfilters'
import { events } from './reducers/events'


const eventApp = combineReducers({
  visibilityFilter,
  events
})

export default eventApp
