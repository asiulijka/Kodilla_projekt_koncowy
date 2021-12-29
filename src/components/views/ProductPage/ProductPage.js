import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getById } from '../../../redux/productsRedux.js';
// import { fetchById } from '../../../redux/productsRedux.js';
// import { fetchAllProducts } from '../../../redux/productsRedux.js';

import styles from './ProductPage.module.scss';
import { Button } from './../../common/Button/Button';
import { ChooseQty } from './../../features/ChooseQty/ChooseQty';
import { NotFound } from '../NotFound/NotFound.js';

const Component = ({className, product }) => {
  
  // React.useEffect(() => {
  //   fetchById(id);
  // }, []);

  // React.useEffect(() => {
  //   fetchAllProducts();
  // }, []);
  
  if (product.length === 0) {
    return (
      <NotFound />
    );
  } else {
    product = product[0];
    return (
      <div className={clsx(className, styles.root)}>
        <div className="container">
          <div className="row">
  
            <div className={'col-5 ' + styles.pageColumnLeft}>
              <div className={styles.photoContainer}>
                <img className={styles.photo} src={product.img1} alt='Main Product Photo here' />
              </div>
  
              <div className={'row ' + styles.sliderBox}>
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
                </div>
              </div>
            </div>
  
  
            <div className={'col-7 ' + styles.pageColumnRight}>
  
              <div className={'container ' + styles.productInfoContainer}>
                <div className='row'>
                  <div className={'col-6 ' + styles.productIntro}>
                    <h4>{product.name}</h4>
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
                  <p><strong>Category:</strong> Mugs and cups</p>
                </div>
              </div>
  
              <div className={'container ' + styles.productInfoContainer}>
                <p className={styles.overview}><strong>Description</strong></p>
                <p className={styles.description}>
                Classic round 330mL stoneware coffee mug. The inside of the mug is white and out of the mug is one colour (yellow, green, dark blue, white or red). This product is not dishwasher safe and handwashing is recommended.
                </p>
              </div>
  
              <div className={'container ' + styles.productInfoContainer}>
                <p className={styles.overview}><strong>Dimentions: </strong></p>
                <p>Dia 81mm x H 95mm x 120mm (includes handle)</p>
              </div>
  
              <div className={'container ' + styles.productInfoContainer}>
                <p className={styles.overview}><strong>Colours: </strong></p>
                <p>Yellow, Green, Red, White, Dark Blue</p>
              </div>
  
              <div className={'container ' + styles.decoration}>
                <p className={styles.overview}><strong>Decoration method: </strong></p>
                <p>Pad Print 50mm x 50mm</p>
              </div>
  
              <div className={'container ' + styles.productInfoContainer}>
                <div className={'row ' + styles.addQuantity}>
                  <p><strong>Availability:</strong> In Stock</p>
                  <p><strong>Choose Quantity:</strong></p>
                  <ChooseQty className={styles.addQuantity}/>
                  <Button className={styles.addQuantityButton} variant='main'>
                    Add to basket
                  </Button>
                </div>
              </div>
            
            </div>
          
          </div>
        </div>
      </div>
    );
  }
};


Component.propTypes = {
  className: PropTypes.string,
  product: PropTypes.array,
  // fetchById: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  product: getById(state, props.match.params.productId),
});

const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
  // fetchAllProducts: () => dispatch(fetchAllProducts()),
  // fetchById: id => dispatch(fetchById(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as ProductPage,
  Container as ProductPage,
  Component as ProductPageComponent,
};