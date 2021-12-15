import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductPage.module.scss';
// import { Col, Row, Container } from 'react-bootstrap';
import { Button } from './../../common/Button/Button';
import { ChooseQty } from './../../features/ChooseQty/ChooseQty';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    {/* <h2>ProductPage</h2>
    <p>This subpage is under construction</p> */}

    <div className="container">
      <div className="row">


        <div className={'col-5 ' + styles.pageColumnLeft}>

          <div className={styles.photoContainer}>
            {/* <p>Main Product Photo here</p> */}
            <img className={styles.photo} src={'https://primopromo.com.au/assets/Uploads/Products/bc4f018489/Arabica-Coffee-Mug+Yellow.jpg'} alt='' />
            {/* <img className={styles.photo} src={'https://www.trends.nz/resizer/470/112140-0.jpg'} alt='' /> */}
    
            {/* <Button className={styles.expandButton} variant='outline'>
              <FontAwesomeIcon icon={faExpandArrowsAlt}></FontAwesomeIcon>
            </Button> */ }
          </div>

          <div className={'row ' + styles.sliderBox}>
            {/* <p>Slider box - mini photos</p> */}
            <div className={'col-2 ' + styles.photoContainerMini}>
              <img className={styles.photoMini} src={'https://primopromo.com.au/assets/Uploads/Products/d1ae502f58/Arabica-Coffee-Mug+Red.jpg'} alt='' />
            </div>
            <div className={'col-2 ' + styles.photoContainerMini}>
              <img className={styles.photoMini} src={'https://primopromo.com.au/assets/Uploads/Products/292be3bbba/Arabica-Coffee-Mug+Green.jpg'} alt='' />
            </div>
            <div className={'col-2 ' + styles.photoContainerMini}>
              <img className={styles.photoMini} src={'https://primopromo.com.au/assets/Uploads/Products/5a8de58c0e/Arabica-Coffee-Mug+Dark-Blue.jpg'} alt='' />
            </div>
            <div className={'col-2 ' + styles.photoContainerMini}>
              <img className={styles.photoMini} src={'https://primopromo.com.au/assets/Uploads/Products/2e18cf5e38/Arabica-Coffee-Mug+White.jpg'} alt='' />
              {/* <img className={styles.photoMini} src={''} alt='' /> */}
            </div>

            {/* <div className={'col-12 ' + styles.sideArrow}>
              <Button variant='sideArrows'>
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <Button variant='sideArrows'>
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div> */}
          </div>
        </div>


        <div className={'col-7 ' + styles.pageColumnRight}>

          <div className={'container ' + styles.productInfoContainer}>
            <div className='row'>
              <div className={'col-6 ' + styles.productIntro}>
                <h4>Arabica Coffee Mug</h4>
              </div>
              <div className={'col ' + styles.productIntro}>
                <p><strong>Price from</strong></p>
                <p><strong>$5.00/each </strong></p>
              </div>
              <div className={'col ' + styles.productIntro}>
                <Button className={styles.addQuantity} variant='main'>
                  Check for price details
                </Button>
              </div>
            </div>
          </div>

          <div className={'container ' + styles.productInfoContainer}>
            <div className='row'>
              {/* <div className={'col ' + styles.availabilityContainer}> */}
              <p><strong>Category:</strong> Mugs and cups</p>
            </div>
            {/* <div className={'col ' + styles.availabilityContainer}>
                <p>Availability: In Stock</p>
              </div> */}
            {/* </div> */}
          </div>

          <div className={'container ' + styles.productInfoContainer}>
            <p className={styles.overview}><strong>Description</strong></p>
            <p className={styles.description}>
            Classic round 330mL stoneware coffee mug. The inside of the mug is white and out of the mug is one colour (yellow, green, dark blue, white or red). This product is not dishwasher safe and handwashing is recommended.
            </p>
          </div>

          <div className={'container ' + styles.productInfoContainer}>
            <p className={styles.overview}><strong>Dimentions: </strong>
              {/* Dia 81mm x H 95mm x 120mm (includes handle) */}
            </p>
            <p>Dia 81mm x H 95mm x 120mm (includes handle)</p>
          </div>

          <div className={'container ' + styles.productInfoContainer}>
            <p className={styles.overview}><strong>Colours: </strong>
              {/* Yellow, Green, Red */}
            </p>
            <p>Yellow, Green, Red, White, Dark Blue</p>
          </div>

          <div className={'container ' + styles.decoration}>
            <p className={styles.overview}><strong>Decoration method: </strong>
              {/* Pad Print 50mm x 50mm */}
            </p>
            <p>Pad Print 50mm x 50mm</p>
          </div>

          <div className={'container ' + styles.productInfoContainer}>
            {/* <div className='row'> */}
            <div className={'row ' + styles.addQuantity}>
              {/* <p><strong>Availability:</strong> In Stock</p> */}

              {/* <div className={styles.addQuantity}> */}
              <p><strong>Availability:</strong> In Stock</p>
              <p><strong>Choose Quantity:</strong></p>
              {/* <div> */}
              <ChooseQty className={styles.addQuantity}/>
              {/* </div> */}

              {/* </div> */}

   
              {/* <div className={styles.buttonContainer}> */}
              <Button className={styles.addQuantityButton} variant='main'>
                Add to cart
              </Button>
              {/* </div> */}
       
            </div>

          </div>
        
        </div>
      
      </div>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductPage,
  // Container as ProductPage,
  Component as ProductPageComponent,
};