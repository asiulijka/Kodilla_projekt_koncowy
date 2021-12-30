import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { addToCart } from '../../../redux/cartRedux.js';

import styles from './ProductBox.module.scss';

import { Link } from 'react-router-dom';

import { Button } from './../Button/Button';
// import { Products } from '../../features/Products/Products';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Component = ({className, _id, name, price, img1, addToCart, decoration, colours }) => {

  const handleCart = () => {
    console.log('handleCart');
    // e.preventDefault();
    addToCart({ _id, name, price, img1, decoration, colours });
  };


  return(
    <div className={clsx(className, styles.root)}>
      <div className="container">
        <div className={styles.photo}>
          <Link to={`/products/${_id}`}>
            <img src={img1} alt='product main photo' />
          </Link>
        </div>

        <div className={styles.productName}>
          <Link className={styles.productLink} to={`/products/${_id}`}>
            <h5>{name}</h5>
          </Link>
        </div>

        <div className={styles.price}>
          <p>Price from {`$${price}`}</p>
        </div>

        <div className={'row ' + styles.actions}>
          <Button className={styles.actionsButton} variant='main' onClick={handleCart}>
            Add to basket
          </Button>

          <Link className='col' to={`/products/${_id}`}>
            <Button className={styles.actionsButton} variant='main'>
              Check for details
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );

};

Component.propTypes = {
  className: PropTypes.string,
  _id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  img1: PropTypes.string,
  addToCart: PropTypes.func,
  decoration: PropTypes.string,
  colours: PropTypes.string,
};

const mapStateToProps = state => ({
  // someProp: reduxSelector(state),
});

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addToCart(product)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as ProductBox,
  Container as ProductBox,
  Component as ProductBoxComponent,
};