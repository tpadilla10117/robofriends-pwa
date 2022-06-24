import { shallow, mount, render } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

describe('SearchBox.js Component:', () => {
    it('renders the SearchBox.js component', () => {
        expect.assertions(1);
        expect(shallow(<SearchBox/>).length).toEqual(1);
    })

})
