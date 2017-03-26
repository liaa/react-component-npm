import React from 'react';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon';

import MyComponent from '../index';

// Demo tests

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Shallow Rendering', () => {

    it('to have three `.icon-test`s', () => {
        const wrapper = shallow(<MyComponent />);
        expect(wrapper.find('.icon-test').length).toBe(3)
    });

    it('simulates click events', () => {
        const buttonClick = jest.fn();
        const wrapper = shallow(
          <MyComponent handleClick={buttonClick} />
        );
        wrapper.find('button').simulate('click');
        expect(buttonClick).toBeCalled();
    });

});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('Full DOM Rendering', () => {

    it('allows us to set props', () => {
        const wrapper = mount(<MyComponent bar='baz' />);
        expect(wrapper.props().bar).toBe('baz');
    });

    it('calls componentDidMount', () => {
        sinon.spy(MyComponent.prototype, 'componentDidMount');
        const wrapper = mount(<MyComponent />);
        expect(MyComponent.prototype.componentDidMount.calledOnce).toBe(true);
        MyComponent.prototype.componentDidMount.restore();
    });

});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Static Rendered Markup', () => {

    it('renders three `.icon-test`s', () => {
        const wrapper = render(<MyComponent />);
        expect(wrapper.find('.icon-test').length).toBe(3);
    });

});