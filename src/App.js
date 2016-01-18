import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addEvent, completeEvent, setVisibilityFilter, VisibilityFilters } from './actions'
import EventStream from './components/EventStream'
import AddEvent from './components/AddEvent'

export default class App extends Component {
  render() {
    const { dispatch, visibleEvents, visibilityFilter } = this.props
    return (
      <div>
        <AddEvent
          onAddClick={text =>
            dispatch(addEvent(text))
          } />
        <EventStream
          events={
            [
              {
                text: 'Use Redux',
                completed: true
              },
              {
                text: 'Learn to connect it to React',
                completed: false
              }
            ]
          }
          onEventClick={index =>
            dispatch(completeEvent(index))
          } />
      </div>
    )
  }
}

App.propTypes = {
  visibleEvents: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}

function selectEvents(events, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return events
    case VisibilityFilters.SHOW_COMPLETED:
      return events.filter(event => event.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return events.filter(event => !event.completed)
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleEvents: selectEvents(state.events, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App)