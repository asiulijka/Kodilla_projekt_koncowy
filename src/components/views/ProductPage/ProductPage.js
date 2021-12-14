import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductPage.module.scss';
// import { Col, Row, Container } from 'react-bootstrap';
import { Button } from './../../common/Button/Button';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    {/* <h2>ProductPage</h2>
    <p>This subpage is under construction</p> */}

    <div className="container">
      <div className="row">


        <div className={'col-5 ' + styles.pageColumnLeft}>

          <div className={styles.photoContainer}>
            {/* <p>Main Product Photo here</p> */}
            <img className={styles.photo} src={'https://www.trends.nz/resizer/470/112140-0.jpg'} alt='' />
            {/* <img className={styles.photo} src={'https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt='' /> */}
            {/* <Button className={styles.expandButton} variant='outline'>
              <FontAwesomeIcon icon={faExpandArrowsAlt}></FontAwesomeIcon>
            </Button> */ }
          </div>

          <div className={'row ' + styles.sliderBox}>
            {/* <p>Slider box - mini photos</p> */}
            <div className={'col-2 ' + styles.photoContainerMini}>
              <img className={styles.photoMini} src={'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt='' />
            </div>
            <div className={'col-2 ' + styles.photoContainerMini}>
              <img className={styles.photoMini} src={'https://images.pexels.com/photos/2122423/pexels-photo-2122423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt='' />
            </div>
            <div className={'col-2 ' + styles.photoContainerMini}>
              <img className={styles.photoMini} src={'https://images.pexels.com/photos/1619854/pexels-photo-1619854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt='' />
            </div>
            <div className={'col-2 ' + styles.photoContainerMini}>
              <img className={styles.photoMini} src={''} alt='' />
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
              <div className={'col ' + styles.productIntro}>
                <h4>Arabica Coffee Mug</h4>
              </div>
              <div className={'col ' + styles.productIntro}>
                <p>Price from</p>
                <p><strong>$5.00 </strong>each</p>
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
            Round, 330ml D handle stoneware coffee mug. The inside and out of the mug is one colour (yellow, green or red) and handwashing is recommended.
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
            <p>Yellow, Green, Red</p>
          </div>

          <div className={'container ' + styles.productInfoContainer}>
            <p className={styles.overview}><strong>Decoration method: </strong>
              {/* Pad Print 50mm x 50mm */}
            </p>
            <p>Pad Print 50mm x 50mm</p>
          </div>

          <div className={'container ' + styles.productInfoContainer}>
            <div className={'row ' + styles.addToCartContainer}>
              <p><strong>Availability:</strong> In Stock</p>

              <div className={'row ' + styles.addToCartContainer}>
                <p>Quantity:</p>
                {/* <div className={styles.quantity}>2</div> */}
                <div className={styles.buttonContainer}>
          
                  <Button variant='quantityChange'>-</Button>
                </div>
                <div className={styles.buttonContainer}>
            
                  <Button variant='quantityChange'>+</Button>
                </div> 
              </div>

   
              <div className={styles.buttonContainer}>
                <Button variant='main'>
                  Add to cart
                </Button>
              </div>
       
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