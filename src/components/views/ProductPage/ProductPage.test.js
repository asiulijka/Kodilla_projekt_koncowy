import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { ProductPageComponent } from './ProductPage';

configure({ adapter: new Adapter() });

const testProduct = {
  name: 'Arabica Coffee Mug', 
  price: 5, 
  description: 'Classic round 330mL stoneware coffee mug. The inside of the mug is white and out of the mug is one colour - yellow, green, dark blue, white or red. This product is not dishwasher safe and handwashing is recommended.', 
  category: 'Mugs and cups', 
  dimentions: 'Dia 81mm x H 95mm x 120mm - includes handle', 
  colours: 'Yellow, Green, Red, White, Dark Blue', 
  decoration: 'Pad Print 50mm x 50mm', 
  availability: 'In Stock', 
  img1: 'https://www.trends.nz/resizer/470/104193-2.jpg', 
  img2: 'https://www.trends.nz/resizer/470/104193-6.jpg', 
  img3: 'https://www.trends.nz/resizer/470/104193-4.jpg', 
  img4: 'https://www.trends.nz/resizer/470/104193-1.jpg', 
  img5: 'https://www.trends.nz/resizer/470/104193-8.jpg' 
};

describe('Component ProductPage', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductPageComponent product={[testProduct]} />);
    expect(component).toBeTruthy();
  });
});
