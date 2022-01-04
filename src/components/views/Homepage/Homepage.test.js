import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { HomepageComponent } from './Homepage';

configure({ adapter: new Adapter() });

describe('Component Homepage', () => {
  it('should render without crashing', () => {
    const component = shallow(<HomepageComponent />);
    expect(component).toBeTruthy();
  });
});
