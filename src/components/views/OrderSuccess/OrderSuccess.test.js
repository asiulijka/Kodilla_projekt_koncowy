import React from 'react';
import { shallow } from 'enzyme';
import { OrderSuccessComponent } from './OrderSuccess';

describe('Component OrderSuccess', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderSuccessComponent />);
    expect(component).toBeTruthy();
  });
});
