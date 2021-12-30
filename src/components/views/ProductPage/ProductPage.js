import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getById } from '../../../redux/productsRedux.js';
// import { fetchById } from '../../../redux/productsRedux.js';
// import { fetchAllProducts } from '../../../redux/productsRedux.js';
// import { getAll as getAllCart } from '../../../redux/cartRedux.js';
import { addToCart } from '../../../redux/cartRedux.js';

import styles from './ProductPage.module.scss';
import { Button } from './../../common/Button/Button';
import { QtyWidget } from './../../features/QtyWidget/QtyWidget';
import { NotFound } from '../NotFound/NotFound.js';

const Component = ({className, product, _id, name, price, img1, addToCart, decoration, colours }) => {
  
  // React.useEffect(() => {
  //   fetchById(id);
  // }, []);

  // React.useEffect(() => {
  //   fetchAllProducts();
  // }, []);

  const handleCart = () => {
    // console.log('handleCart');
    // e.preventDefault();
    addToCart({ _id, name, price, img1, decoration, colours, qty: 1 });
  };
  
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
                  <img className={styles.photoMini} src={product.img2} alt='' />
                </div>
                <div className={'col-2 ' + styles.photoContainerMini}>
                  <img className={styles.photoMini} src={product.img3} alt='' />
                </div>
                <div className={'col-2 ' + styles.photoContainerMini}>
                  <img className={styles.photoMini} src={product.img4} alt='' />
                </div>
                <div className={'col-2 ' + styles.photoContainerMini}>
                  <img className={styles.photoMini} src={product.img5} alt='' />
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
                    <p><strong>$ {product.price}/each </strong></p>
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
                  <p><strong>Category:</strong> {product.category}</p>
                </div>
              </div>
  
              <div className={'container ' + styles.productInfoContainer}>
                <p className={styles.overview}><strong>Description</strong></p>
                <p className={styles.description}>
                  {product.description}
                </p>
              </div>
  
              <div className={'container ' + styles.productInfoContainer}>
                <p className={styles.overview}><strong>Dimentions: </strong></p>
                <p>{product.dimentions}</p>
              </div>
  
              <div className={'container ' + styles.productInfoContainer}>
                <p className={styles.overview}><strong>Colours: </strong></p>
                <p>{product.colours}</p>
              </div>
  
              <div className={'container ' + styles.decoration}>
                <p className={styles.overview}><strong>Decoration method: </strong></p>
                <p>{product.decoration}</p>
              </div>
  
              <div className={'container ' + styles.productInfoContainer}>
                <div className={'row ' + styles.addQuantity}>
                  <p><strong>Availability:</strong> {product.availability}</p>
                  <p><strong>Choose Quantity:</strong></p>
                  <QtyWidget className={styles.addQuantity} id={product._id} qty={product.qty}/>
                  <Button className={styles.addQuantityButton} variant='main' onClick={handleCart}>
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
  // cart: PropTypes.array,
  // fetchById: PropTypes.func,
  addToCart: PropTypes.func,
  _id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  img1: PropTypes.string,
  // addToCart: PropTypes.func,
  decoration: PropTypes.string,
  colours: PropTypes.string,
};

const mapStateToProps = (state, props) => ({
  product: getById(state, props.match.params.productId),
});

const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
  // fetchAllProducts: () => dispatch(fetchAllProducts()),
  // fetchById: id => dispatch(fetchById(id)),
  addToCart: product => dispatch(addToCart(product)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as ProductPage,
  Container as ProductPage,
  Component as ProductPageComponent,
};