import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { ProductBoxComponent } from './ProductBox';

configure({ adapter: new Adapter() });

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductBoxComponent />);
    expect(component).toBeTruthy();
  });
});
