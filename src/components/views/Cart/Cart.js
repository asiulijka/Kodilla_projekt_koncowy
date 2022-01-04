import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAll as getAllCart, removeFromCart, changeComment } from '../../../redux/cartRedux.js';
import { calculateSubtotal, calculateGst, calculateTotal, calculateDelivery } from '../../../utils/commonFunctions.js';
import { Button } from './../../common/Button/Button';
import { QtyWidget } from '../../features/QtyWidget/QtyWidget';

import styles from './Cart.module.scss';


const Component = ({className, cart, removeFromCart, changeComment}) => {

  return(
    <div className={clsx(className, styles.root)}>
      <h3>Your shopping basket</h3>
      
      <div className='container'>

        {cart.map(product => (
          <div className={'row ' + styles.productContainer} key={product.cartId}>

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
                  <QtyWidget id={product.cartId} qty={product.qty} />
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
                  <textarea
                    placeholder="Add your branding comments/requirenments here"
                    name="message"
                    className={styles.commentForm}
                    required
                    onChange={event => changeComment(
                      {
                        comment: event.target.value, 
                        id: product.cartId,
                      })}
                    value={product.comment ? product.comment : ''}
                  />
                </div>
              </div>
            </div>

            <div className={'col-2 ' + styles.itemButton}> 
              <Button variant='cartGrey' onClick={() => removeFromCart(product.cartId)}>
                Remove product
              </Button>

              <Link to={`/products/${product._id}`}>
                <Button className={styles.actionButton} variant='cartGrey'>
                  View item details
                </Button>
              </Link>
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
            <p className={styles.pOrder}>${calculateSubtotal(cart).toFixed(2)}</p>
            <p className={styles.pOrder}>${calculateGst(cart).toFixed(2)}</p>
            <p className={styles.pOrderLast}>${calculateDelivery(cart).toFixed(2)}</p>
            <p><strong>${calculateTotal(cart).toFixed(2)}</strong></p>
          </div>
          
          <div className='col-1'></div>
  
          <Link className={'col-4 ' + styles.checkoutBtn} to='/order'>
            <Button variant='main-long'>
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
  cart: PropTypes.array,
  removeFromCart: PropTypes.func,
  changeComment: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: getAllCart(state),
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id)),
  changeComment: commentInfo => dispatch(changeComment(commentInfo)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component); 

export {
  Container as Cart,
  Component as CartComponent,
};