import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { OrderComponent } from './Order';

configure({ adapter: new Adapter() });

describe('Component Order', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderComponent cart={[]} />);
    expect(component).toBeTruthy();
  });
});
