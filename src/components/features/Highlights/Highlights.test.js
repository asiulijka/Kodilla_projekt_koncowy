import React from 'react';
import { shallow } from 'enzyme';
import { HighlightsComponent } from './Highlights';

describe('Component Highlights', () => {
  it('should render without crashing', () => {
    const component = shallow(<HighlightsComponent />);
    expect(component).toBeTruthy();
  });
});
