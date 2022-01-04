import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { FooterComponent } from './Footer';

configure({ adapter: new Adapter() });

describe('Component Footer', () => {
  it('should render without crashing', () => {
    const component = shallow(<FooterComponent />);
    expect(component).toBeTruthy();
  });
});
