import { shallow } from 'enzyme'
import sinon from 'sinon'
import { expect } from 'chai'

import React from 'react'
import Event from '../src/components/Event'

describe('<Event />', () => {

  it('renders one <li>', () => {
    const wrapper = shallow(<Event onClick={() => {}} text="Hello Kinja!" completed={false} />)
    expect(wrapper.find('li')).to.have.length(1)
  })

  it('renders one <li> with the correct text', () => {
    const wrapper = shallow(<Event onClick={() => {}} text="Hello Kinja!" completed={false} />)
    expect(wrapper.find('li').text()).to.equal('Hello Kinja!')
  })

  it('renders one <li> with the correct style', () => {
    const wrapper = shallow(<Event onClick={() => {}} text="Hello Kinja!" completed={true} />)
    expect(wrapper.find('li').hasClass('completed')).to.equal(true)
  })

  it('simulates click events', () => {
    const onButtonClick = sinon.spy()
    const wrapper = shallow(<Event onClick={onButtonClick} text="Hello Kinja!" completed={false} />)
    wrapper.simulate('click')
    expect(onButtonClick.calledOnce).to.equal(true)
  })

})