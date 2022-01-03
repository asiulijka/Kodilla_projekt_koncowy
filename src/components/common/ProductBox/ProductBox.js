import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import short from 'short-uuid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart } from '../../../redux/cartRedux.js';
import { Button } from './../Button/Button';

import styles from './ProductBox.module.scss';


const Component = ({className, _id, name, price, img1, addToCart, decoration, colours }) => {

  const handleCart = () => {
    addToCart({ _id, name, price, img1, decoration, colours, qty: 1, cartId: short.uuid() });
  };

  return(
    <div className={clsx(className, styles.root)}>
      <div className={'container ' + styles.mainContainer}>
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
          <Button className={'col ' + styles.actionsButton} variant='main' onClick={handleCart}>
            Add to cart
          </Button>

          <Link className={'col ' + styles.actionsButton} to={`/products/${_id}`}>
            <Button className={styles.actionsButton} variant='main'>
              Details
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
  Container as ProductBox,
  Component as ProductBoxComponent,
};