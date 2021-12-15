import React from 'react';
import { shallow } from 'enzyme';
import { ProductsPageComponent } from './ProductsPage';

describe('Component ProductsPage', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductsPageComponent />);
    expect(component).toBeTruthy();
  });
});
