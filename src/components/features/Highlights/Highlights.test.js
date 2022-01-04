import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { HighlightsComponent } from './Highlights';

configure({ adapter: new Adapter() });

describe('Component Highlights', () => {
  it('should render without crashing', () => {
    const component = shallow(<HighlightsComponent />);
    expect(component).toBeTruthy();
  });
});
