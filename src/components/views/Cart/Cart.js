import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll as getAllCart } from '../../../redux/cartRedux.js';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';

import { Button } from './../../common/Button/Button';
import { ChooseQty } from './../../features/ChooseQty/ChooseQty';
import { Link } from 'react-router-dom';

const Component = ({className, cart }) => {



  return(
    <div className={clsx(className, styles.root)}>
      <h3>Your shopping basket</h3>
      
      <div className='container'>

        {cart.map(cart => (
          <div className={'row ' + styles.productContainer} key={cart._id}>
            <div className={'col-2 ' + styles.photo}>
              <img src={cart.img1} alt='product main photo' />
            </div>
            <div className={'col-3 ' + styles.description}>
              <p><strong>{cart.name}</strong></p>
              <p className={styles.pInfo}>Price from $ {cart.price}/each</p>
              <p className={styles.pInfo}>Available colours: {cart.colours}</p>
              <p className={styles.pInfo}>Decoration method: {cart.decoration}</p>
            </div>
            <div className='col-4'>
              <div className='row'>
                <div className={'col-6 ' + styles.description}>
                  <p className={styles.pMain}>
                    <strong>Choose quantity</strong>
                  </p>
                  <ChooseQty />
                </div>
                <div className={'col-4 ' + styles.description}>
                  <p className={styles.pMain}>
                    <strong>Total price</strong>
                  </p>
                  <p className={styles.pPrice}>
                    <strong>$1010</strong>
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
              <Button variant='cartGrey'>
                Remove product
              </Button>
              {/* </div> */}
              {/* <div className='col-4'> */}
              <Link to={`/products/${cart._id}`}>
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
    

  
  
        <div className={'row ' + styles.productContainer}>
          <div className={'col-2 ' + styles.photo}>
            <img src='https://www.trends.nz/resizer/470/112140-0.jpg' alt='product main photo' />
          </div>
          <div className={'col-3 ' + styles.description}>
            <p><strong>Arabica Coffee Mug</strong></p>
            <p className={styles.pInfo}>Price from $5/each</p>
            <p className={styles.pInfo}>Available colours: Yellow, Green, Red, White, Dark Blue</p>
            <p className={styles.pInfo}>Decoration method: Pad Print 50mm x 50mm</p>
          </div>
          <div className='col-4'>
            <div className='row'>
              <div className={'col-6 ' + styles.description}>
                <p className={styles.pMain}>
                  <strong>Choose quantity</strong>
                  {/* Choose quantity */}
                </p>
                <ChooseQty />
              </div>
              <div className={'col-4 ' + styles.description}>
                <p className={styles.pMain}>
                  <strong>Total price</strong>
                </p>
                <p className={styles.pPrice}>
                  <strong>$1010</strong>
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
            <Button variant='cartGrey'>
              Remove product
            </Button>
            {/* </div> */}
            {/* <div className='col-4'> */}
            <Link to={`/products/${cart._id}`}>
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
            <p className={styles.pOrder}>$22</p>
            <p className={styles.pOrder}>$2</p>
            <p className={styles.pOrderLast}>TBC</p>
            <p><strong>$222</strong></p>
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
};

const mapStateToProps = state => ({
  cart: getAllCart(state),
});

const mapDispatchToProps = dispatch => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component); 

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent,
};