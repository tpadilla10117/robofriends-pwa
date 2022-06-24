import { shallow } from 'enzyme';
import React from 'react';
/* import MainPage from './MainPage'; */

/*  We have to mock all the methods that redux comes with: 

*/

it('expect to render App component', () => {
    const mockStore = {
        robots: [],
        searchField: ''
    }
    expect(shallow(<App store={mockStore} />)).toMatchSnapshot()
})