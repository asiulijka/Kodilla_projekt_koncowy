import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { LoginComponent } from './Login';

configure({ adapter: new Adapter() });

describe('Component Login', () => {
  it('should render without crashing', () => {
    const component = shallow(<LoginComponent />);
    expect(component).toBeTruthy();
  });
});
