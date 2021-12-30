import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll as getAllCart, removeFromCart } from '../../../redux/cartRedux.js';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';

import { Button } from './../../common/Button/Button';
import { QtyWidget } from '../../features/QtyWidget/QtyWidget';
import { Link } from 'react-router-dom';

const Component = ({className, cart, removeFromCart }) => {

  const calculateSubtotal = cart => {
    let subtotal = 0;
    for (const product of cart) {
      subtotal += product.price * product.qty;
    }
    return subtotal;
  };

  const calculateGst = calculateSubtotal * 0.1;

  const calculateTotal = cart => {
    return cart.length == 0 ? 0 : calculateSubtotal(cart) + 20;
  };

  return(
    <div className={clsx(className, styles.root)}>
      <h3>Your shopping basket</h3>
      
      <div className='container'>

        {cart.map(product => (
          <div className={'row ' + styles.productContainer} key={product._id}>
            <div className={'col-2 ' + styles.photo}>
              <img src={product.img1} alt='product main photo' />
            </div>
            <div className={'col-3 ' + styles.description}>
              <p><strong>{product.name}</strong></p>
              <p className={styles.pInfo}>Price from {`$${product.price}`}/each</p>
              <p className={styles.pInfo}>Available colours: {product.colours}</p>
              <p className={styles.pInfo}>Decoration method: {product.decoration}</p>
            </div>
            <div className='col-4'>
              <div className='row'>
                <div className={'col-6 ' + styles.description}>
                  <p className={styles.pMain}>
                    <strong>Choose quantity</strong>
                  </p>
                  <QtyWidget id={product._id} qty={product.qty} />
                </div>
                <div className={'col-4 ' + styles.description}>
                  <p className={styles.pMain}>
                    <strong>Total price</strong>
                  </p>
                  <p className={styles.pPrice}>
                    <strong>{`$${product.price * product.qty}`}</strong>
                  </p>
                </div>

                <div className={'col-7 ' + styles.comment}>
                  {/* <form>
                    <input type="text" value="Add your branding comments here"></input>
                  </form> */}
                  {/* Add your branding comments/requirenments here */}
                  <textarea
                    placeholder="Add your branding comments/requirenments here"
                    name="message"
                    className={styles.commentForm}
                    required
                  />
                </div>
              
              </div>

            </div>

            {/* <div className={'col-4 ' + styles.pInfo}> */}
            <div className={'col-2 ' + styles.itemButton}> 
              <Button variant='cartGrey' onClick={() => removeFromCart(product._id)}>
                Remove product
              </Button>
              {/* </div> */}
              {/* <div className='col-4'> */}
              <Link to={`/products/${product._id}`}>
                <Button className={styles.actionButton} variant='cartGrey'>
                  View item details
                </Button>
              </Link>

              {/* </div> */}
              {/* <div className='col-4'> */}
              <Button variant='update'>
                Update basket
              </Button>
            </div>
          </div>
        ))}
    

        <div className={styles.line}></div>
  
        <h3>Order summary</h3>
  
        <div className={'row ' + styles.orderContainer}>
  
          <div className={'col-5 ' + styles.values}>
            <p className={styles.pOrder}>Subtotal excl. GST</p>
            <p className={styles.pOrder}>GST</p>
            <p className={styles.pOrderLast}>Delivery</p>
            <p><strong>Total</strong></p>
          </div>
  
          <div className={'col-2 ' + styles.values}>
            <p className={styles.pOrder}>${calculateSubtotal(cart)}</p>
            <p className={styles.pOrder}>${calculateGst}</p>
            <p className={styles.pOrderLast}>$20</p>
            <p><strong>${calculateTotal(cart)}</strong></p>
          </div>
          
          <div className='col-1'></div>
  
  
          <Link className={'col-4 ' + styles.checkoutBtn} to='/order'>
            <Button variant='main'>
              Continue to checkout
            </Button>
          </Link>
  
  
  
  
  
  
        </div>
  
      </div>
  
    </div>
  );

};




Component.propTypes = {
  className: PropTypes.string,
  // _id: PropTypes.string,
  cart: PropTypes.array,
  removeFromCart: PropTypes.func,
  // products: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: getAllCart(state),
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component); 

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent,
};