import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { HeaderComponent } from './Header';

configure({ adapter: new Adapter() });

describe('Component Header', () => {
  it('should render without crashing', () => {
    const component = shallow(<HeaderComponent cart={[]} />);
    expect(component).toBeTruthy();
  });
});
