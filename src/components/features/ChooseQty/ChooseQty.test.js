import React from 'react';
import { shallow } from 'enzyme';
import { ChooseQtyComponent } from './ChooseQty';

describe('Component ChooseQty', () => {
  it('should render without crashing', () => {
    const component = shallow(<ChooseQtyComponent />);
    expect(component).toBeTruthy();
  });
});
