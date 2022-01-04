import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button } from './../../common/Button/Button';
import { getAll as getAllCart, sendOrder } from '../../../redux/cartRedux.js';
import { calculateSubtotal, calculateGst, calculateTotal, calculateDelivery } from '../../../utils/commonFunctions.js';

import styles from './Order.module.scss';

const Component = ({className, cart, sendOrder }) => {

  const [customerName, setCustomerName] = React.useState('');
  const [customerEmail, setCustomerEmail] = React.useState('');
  const [customerPhone, setCustomerPhone] = React.useState('');
  const [customerMessage, setCustomerMessage] = React.useState('');

  const handleOrder = () => {
    const payload = {
      cart,
      customerName,
      customerEmail,
      customerPhone,
      customerMessage,
    };
    sendOrder(payload);
  };

  return (
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
            <p className={styles.pOrder}>${calculateSubtotal(cart).toFixed(2)}</p>
            <p className={styles.pOrder}>${calculateGst(cart).toFixed(2)}</p>
            <p className={styles.pOrderLast}>${calculateDelivery(cart).toFixed(2)}</p>
            <p className={styles.pTotal}><strong>${calculateTotal(cart).toFixed(2)}</strong></p>
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
                  Your comment: <em>{product.comment ? product.comment : 'No comment'}</em></p>
                </div>
                <div className='col-2'>
                  <p className={styles.pProd}>QTY: {product.qty}</p>
                </div>
                <div className='col-4'>
                  <p className={styles.pProd}>Total: {`$${product.price * product.qty}`}</p>
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
                onChange={event => setCustomerName(event.target.value)}
              />
            </div>

            <div className={styles.inputContainer}>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className={styles.inputForm}
                required
                onChange={event => setCustomerEmail(event.target.value)}
              />
            </div>

            <div className={styles.inputContainer}>
              <input
                type="number"
                placeholder="Your Phone"
                name="phone"
                className={styles.inputForm}
                required
                onChange={event => setCustomerPhone(event.target.value)}
              />
            </div>

            <div className={styles.inputContainer}>
              <textarea
                placeholder="Your message"
                name="message"
                className={styles.inputForm}
                onChange={event => setCustomerMessage(event.target.value)}
              />
            </div>
 
            <div className={styles.inputContainer}>
              <Link to='/orderSuccess'>
                <Button variant='main' onClick={handleOrder}>
                  Submit
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.array,
  sendOrder: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: getAllCart(state),
});

const mapDispatchToProps = dispatch => ({
  sendOrder: orderDetails => dispatch(sendOrder(orderDetails)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Order,
  Component as OrderComponent,
};