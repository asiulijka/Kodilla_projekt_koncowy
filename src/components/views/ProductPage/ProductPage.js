import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductPage.module.scss';
// import { Col, Row, Container } from 'react-bootstrap';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    {/* <h2>ProductPage</h2>
    <p>This subpage is under construction</p> */}

    <div className="container">
      <div className="row">


        <div className={'col-5 ' + styles.pageColumnLeft}>

          <div className={styles.photoContainer}>
            {/* <p>Main Product Photo here</p> */}
            <img className={styles.photo} src={'https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} alt='' />
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
                <h4>Bottle for sale</h4>
              </div>
              <div className={'col ' + styles.productIntro}>
                <p>Price from $5.00 each</p>
              </div>
            </div>
          </div>

          <div className={'container ' + styles.productInfoContainer}>
            <div className='row'>
              <div className={'col ' + styles.availabilityContainer}>
                <p><strong>Category:</strong> Bottles</p>
              </div>
              <div className={'col ' + styles.availabilityContainer}>
                <p>Availability: In Stock</p>
              </div>
            </div>
          </div>

          <div className={styles.productInfoContainer}>
            <p className={styles.overview}><strong>Description</strong></p>
            <p className={styles.description}>
              Pellentesque dui quam, finibus et venenatis sed, tristique vitae nisi.
              Pellentesque gravida erat in pretium ultrices. In auctor arcu eget leo
              rutrum, non laoreet lorem dignissim.
            </p>
          </div>

          <div className={styles.productInfoContainer}>
            <div className={'row ' + styles.addToCartContainer}>
              <p>Add to cart</p>
              {/* <div className={styles.buttonContainer}>
                <Button variant='favourite2'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                  CART
                </Button>
              </div> */}
              {/* <div className={styles.buttonContainer}>
                <Button variant='sideArrows'>
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
              </div> */}
              {/* <div className={styles.buttonContainer}>
                <Button variant='sideArrows'>
                  <FontAwesomeIcon icon={faExchangeAlt} />
                </Button>
              </div> */}
              {/* <div className={styles.buttonContainer}>
                <Button variant='sideArrows'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </Button>
              </div> */}
            </div>
            <div className={'row ' + styles.addToCartContainer}>
              <p>Quantity:</p>
              {/* <div className={styles.quantity}>2</div>
              <div className={styles.buttonContainer}>
                <Button variant='quantityChange'>-</Button>
              </div>
              <div className={styles.buttonContainer}>
                <Button variant='quantityChange'>+</Button>
              </div> */}
            </div>
          </div>

          <div className={'row ' + styles.productInfoContainer}>
            <div className={styles.buttonContainer}>
              {/* <Button className={styles.brands} variant='facebook'>
                <FontAwesomeIcon
                  className={styles.facebook}
                  icon={faFacebookF}
                ></FontAwesomeIcon>{' '}
                Share
              </Button> */}
            </div>
            <div className={styles.buttonContainer}>
              {/* <Button className={styles.brands} variant='google'>
                <FontAwesomeIcon
                  className={styles.google}
                  icon={faGooglePlusG}
                ></FontAwesomeIcon>{' '}
                Google+
              </Button> */}
            </div>
            <div className={styles.buttonContainer}>
              {/* <Button className={styles.brands} variant='tweet'>
                <FontAwesomeIcon
                  className={styles.twitter}
                  icon={faTwitter}
                ></FontAwesomeIcon>{' '}
                Tweet
              </Button> */}
            </div>
            <div className={styles.buttonContainer}>
              {/* <Button className={styles.brands} variant='pinterest'>
                <FontAwesomeIcon
                  className={styles.pinterest}
                  icon={faPinterestP}
                ></FontAwesomeIcon>{' '}
                Pinterest
              </Button> */}
            </div>
            <div className={styles.buttonContainer}>
              {/* <Button className={styles.brands} variant='linkedin'>
                <FontAwesomeIcon
                  className={styles.linkedIn}
                  icon={faLinkedinIn}
                ></FontAwesomeIcon>{' '}
                Linkedin
              </Button> */}
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