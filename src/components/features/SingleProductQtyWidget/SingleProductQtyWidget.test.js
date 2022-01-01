import React from 'react';
import { shallow } from 'enzyme';
import { SingleProductQtyWidgetComponent } from './SingleProductQtyWidget';

describe('Component SingleProductQtyWidget', () => {
  it('should render without crashing', () => {
    const component = shallow(<SingleProductQtyWidgetComponent />);
    expect(component).toBeTruthy();
  });
});
