import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { MainLayoutComponent } from './MainLayout';

configure({ adapter: new Adapter() });

describe('Component MainLayout', () => {
  it('should render without crashing', () => {
    const component = shallow(<MainLayoutComponent />);
    expect(component).toBeTruthy();
  });
});
