/* 
Notes:
  - shallow -> renders the component shallowly by testing on component at a time
  - mount -> does a full DOM rendering; useful for components that interact with DOM API e.g. querySelectorAll, etc. or 
  maybe a component has a lifecycle method.  Needs to run in a browser-like environment, like a JS DOM or headless browser

  - render -> used to render react components, but its rendered to a static HTML

*/

import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render Card component', () => {

    /* expect(shallow(<Card />).length).toEqual(1) */
    expect(shallow(<Card />)).toMatchSnapshot();
})