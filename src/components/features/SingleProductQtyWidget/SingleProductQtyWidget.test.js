import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { SingleProductQtyWidgetComponent } from './SingleProductQtyWidget';

configure({ adapter: new Adapter() });

describe('Component SingleProductQtyWidget', () => {
  it('should render without crashing', () => {
    const component = shallow(<SingleProductQtyWidgetComponent />);
    expect(component).toBeTruthy();
  });
});
