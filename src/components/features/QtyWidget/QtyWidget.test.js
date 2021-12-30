import React from 'react';
import { shallow } from 'enzyme';
import { QtyWidgetComponent } from './QtyWidget';

describe('Component QtyWidget', () => {
  it('should render without crashing', () => {
    const component = shallow(<QtyWidgetComponent />);
    expect(component).toBeTruthy();
  });
});
