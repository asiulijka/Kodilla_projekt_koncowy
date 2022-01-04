import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { CartComponent } from './Cart';

configure({ adapter: new Adapter() });

describe('Component Cart', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartComponent cart={[]} />);
    expect(component).toBeTruthy();
  });
});
