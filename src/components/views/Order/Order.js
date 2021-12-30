import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll as getAllCart, clearCart} from '../../../redux/cartRedux.js';

import styles from './Order.module.scss';

import { Button } from './../../common/Button/Button';
import { Link } from 'react-router-dom';

const Component = ({className, cart, clearCart }) => (
  <div className={clsx(className, styles.root)}>
    <h3>Your Order Summary</h3>
    
    <div className='container'>
      <div className={'row ' + styles.orderContainer}>

        <div className={'col-3 ' + styles.values}>
          <p className={styles.pOrder}>Subtotal excl. GST</p>
          <p className={styles.pOrder}>GST</p>
          <p className={styles.pOrderLast}>Delivery</p>
          <p className={styles.pTotal}><strong>Total</strong></p>
        </div>

        <div className={'col-1 ' + styles.values}>
          <p className={styles.pOrder}>$22</p>
          <p className={styles.pOrder}>$2</p>
          <p className={styles.pOrderLast}>TBC</p>
          <p className={styles.pTotal}><strong>$222</strong></p>
        </div>

        <div className='col-2'></div>

        <div className='col-6'>
          <div className='row'>
            <div className='col-6'>
              <p><strong>Your order:</strong></p>
            </div>
            <div className={'col-6 ' + styles.amendBtn}>
              <Link to='/cart'>
                <Button className={styles.actionButton} variant='small'>
                  Amend order
                </Button>
              </Link>
            </div>       
          </div>
        
          {cart.map(product =>(
            <div className='row' key={product._id}>
              <div className='col-6'>
                <p className={styles.pProd}>{product.name}<br />
                Your comment: <em>Red mug, blue logo please</em></p>
              </div>
              <div className='col-2'>
                <p className={styles.pProd}>QTY: {product.qty}</p>
              </div>
              <div className='col-4'>
                <p className={styles.pProd}>Total: $1020</p>
              </div>
            </div>
          ))}


        </div>

      </div>

      <h3>Whats next?</h3>

      <div className={'row ' + styles.orderContainer}>
        <p className={styles.pInfo}><strong className={styles.strong}>T</strong>hank you for choosing Bottle-O. To place your order, please fill in the below form.<br />
          <strong className={styles.strong}>O</strong>ur kindly team will look into your order and contact you shortly to provide you with pricing options and best decoration method.<br />
          Please note that the response time may take up to two days if the order is very complicated.<br />
        </p>
      </div>

      <div className={'row ' + styles.orderContainer}>

        <form className={styles.formContainer}>

          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className={styles.inputForm}
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className={styles.inputForm}
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <input
              type="number"
              placeholder="Your Phone"
              name="phone"
              className={styles.inputForm}
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <textarea
              placeholder="Your message"
              name="message"
              className={styles.inputForm}
              required
            />
          </div>

          
          <div className={styles.inputContainer}>
            <Button variant='main' onClick={clearCart}>
              Submit
            </Button>
          </div>

        </form>


      </div>


    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cart: PropTypes.array,
  clearCart: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: getAllCart(state),
});

const mapDispatchToProps = dispatch => ({
  clearCart: products => dispatch(clearCart(products)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Order,
  Container as Order,
  Component as OrderComponent,
};