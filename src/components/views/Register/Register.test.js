import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { RegisterComponent } from './Register';

configure({ adapter: new Adapter() });

describe('Component Register', () => {
  it('should render without crashing', () => {
    const component = shallow(<RegisterComponent />);
    expect(component).toBeTruthy();
  });
});
