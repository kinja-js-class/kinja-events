import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai'

import React from 'react'
import Event from '../src/components/Event'

describe('<Event />', () => {

  it('renders one <li>', () => {
    const wrapper = shallow(<Event onClick={() => {}} text="Hello Kinja!" completed={false} />);
    expect(wrapper.find('li')).to.have.length(1);
  });

  // it('renders an `.icon-star`', () => {
  //   const wrapper = shallow(<MyComponent />);
  //   expect(wrapper.find('.icon-star')).to.have.length(1);
  // });

  // it('renders children when passed in', () => {
  //   const wrapper = shallow(
  //     <MyComponent>
  //       <div className="unique" />
  //     </MyComponent>
  //   );
  //   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  // });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(
  //     <Foo onButtonClick={onButtonClick} />
  //   );
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick.calledOnce).to.equal(true);
  // });

});