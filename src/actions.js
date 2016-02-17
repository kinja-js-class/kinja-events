/*
 * action types
 */

export const ADD_EVENT = 'ADD_EVENT'
export const COMPLETE_EVENT = 'COMPLETE_EVENT'
export const INSERT_EVENTS = 'INSERT_EVENTS'

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
  return { type: COMPLETE_EVENT, id: event.id }
}

function insertEvents(json) {
    return {
        type: INSERT_EVENTS,
        events: json
    }
}

export function fetchEvents() {
    return (dispatch, getState) => {
        let url = 'http://localhost:3000/deploy'
        return fetch(url, {mode: 'cors'})
            .then(response => response.json())
            .then(json => dispatch(insertEvents(json)))
    }
}
