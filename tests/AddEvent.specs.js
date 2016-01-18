import { shallow, mount, describeWithDOM } from 'enzyme'
import sinon from 'sinon'
import { expect } from 'chai'

import React from 'react'
import AddEvent from '../src/components/AddEvent'

describeWithDOM('<AddEvent />', () => {

  it('the markup is correct', () => {
    const wrapper = shallow(<AddEvent onAddClick={() => {}} />)
    expect(wrapper.find('input')).to.have.length(1)
    expect(wrapper.find('button')).to.have.length(1)
  })

  it('simulates click events', () => {
    const onButtonClick = sinon.spy()
    const wrapper = mount(<AddEvent onAddClick={onButtonClick} />)
    wrapper.find('button').simulate('click')
    expect(onButtonClick.calledOnce).to.equal(true)
  })

  it('trim', () => {
    const onButtonClick = (text) => expect(text).to.equal('hello')
    const wrapper = mount(<AddEvent onAddClick={onButtonClick} />)
    wrapper.find('input').first().node.value = ' hello '
    wrapper.find('button').simulate('click')
  })

})