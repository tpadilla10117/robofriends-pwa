import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

/*  We have to mock all the methods that redux comes with: 

*/
let wrapper;

/* Runs before tests: */
beforeEach( () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }

    wrapper = shallow(<MainPage {...mockProps } />)
})

it('renders MainPage without crashing', () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
})

/* instance gives me access to methods: */
it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }

    const wrapper2 = shallow(<MainPage {...mockProps2} /> )
    expect.assertions(1);
    /* expect(wrapper.instance().filterRobots()).toEqual([]); */
    expect(wrapper2.instance().filterRobots()).toEqual([]);
})