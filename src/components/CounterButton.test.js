import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

describe('CounterButton.js component:', () => {
    it('expect to render CounterButton component', () => {
        const mockColor = 'red';
        expect.assertions(1);
        expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
    })

    it('correctly increments the counter', () => {
        const mockColor = 'red';
        const wrapper = shallow(<CounterButton color={mockColor} />);
        expect.assertions(2);

    /* Searching for an id by simulating a click event: */
        wrapper.find('[id="counter"]').simulate('click')
        expect(wrapper.state()).toEqual({ count: 2});

    /* Checking the props: */
        expect(wrapper.props().color).toEqual('red');
    })
})