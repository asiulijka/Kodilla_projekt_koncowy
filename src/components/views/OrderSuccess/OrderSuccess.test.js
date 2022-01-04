import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { OrderSuccessComponent } from './OrderSuccess';

configure({ adapter: new Adapter() });

describe('Component OrderSuccess', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderSuccessComponent />);
    expect(component).toBeTruthy();
  });
});
