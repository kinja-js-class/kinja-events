import { shallow } from 'enzyme'
import sinon from 'sinon'
import { expect } from 'chai'

import { ADD_EVENT } from '../src/actions'
import eventApp from '../src/reducers'

describe('Reducers', () => {

  it('ADD_EVENT', () => {
    const state = {}
    const action = {
      type: ADD_EVENT,
      id: 42,
      text: 'Yolo!'
    }

    expect(eventApp(state, action).events[0]).to.deep.equal({
      id: 42,
      text: 'Yolo!',
      completed: false
    })
  })

})