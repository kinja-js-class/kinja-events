/*
 * action types
 */

export const ADD_EVENT = 'ADD_EVENT'
export const COMPLETE_EVENT = 'COMPLETE_EVENT'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

let nextEventId = 0;

export function addEvent(text) {
  return {
    type: ADD_EVENT,
    id: nextEventId++,
    text
  };
}

export function completeEvent(id) {
  return { type: COMPLETE_EVENT, id }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}