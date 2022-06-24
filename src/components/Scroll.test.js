import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

describe('Scroll.js coponent:', () => {
    it('renders the Scroll.js component', () => {
        expect.assertions(2);
        expect(shallow(<Scroll/>)).toMatchSnapshot();
        expect(shallow(<Scroll/>).length).toEqual(1)
    })
})
