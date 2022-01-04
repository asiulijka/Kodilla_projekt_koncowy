import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { QtyWidgetComponent } from './QtyWidget';

configure({ adapter: new Adapter() });

configure({ adapter: new Adapter() });

describe('Component QtyWidget', () => {
  it('should render without crashing', () => {
    const component = shallow(<QtyWidgetComponent />);
    expect(component).toBeTruthy();
  });
});
