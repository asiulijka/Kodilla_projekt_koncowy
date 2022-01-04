import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { ProductsComponent } from './Products';

configure({ adapter: new Adapter() });

describe('Component Products', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductsComponent products={[]} />);
    expect(component).toBeTruthy();
  });
});
