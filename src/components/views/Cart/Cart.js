import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';

import { Button } from './../../common/Button/Button';
import { ChooseQty } from './../../features/ChooseQty/ChooseQty';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <h3>Your shopping basket</h3>
    
    <div className='container'>
  
      <div className={'row ' + styles.productContainer}>
        <div className={'col-2 ' + styles.photo}>
          <img src='https://www.trends.nz/resizer/470/112140-0.jpg' alt='product main photo' />
        </div>
        <div className={'col-3 ' + styles.description}>
          <p><strong>Arabica Coffee Mug</strong></p>
          <p className={styles.pFont}>Price from $5/each</p>
          <p className={styles.pFont}>Available colours: Yellow, Green, Red, White, Dark Blue</p>
          <p className={styles.pFont}>Decoration method: Pad Print 50mm x 50mm</p>
        </div>
        <div className={'col-3 ' + styles.quantity}>
          <p className={styles.pQty}>
            <strong>Choose quantity</strong>
            {/* Choose quantity */}
          </p>
          <ChooseQty />
        </div>
        <div className='col-3'>Total price</div>
        <div className='col-12'>Add your branding comments</div>
        <div className='col-6'>Remove product</div>
        <div className='col-6'>View full product details</div>
      </div>



      <div className='row'>

        <p>Order summary</p>
        
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
  Component as Cart,
  // Container as Cart,
  Component as CartComponent,
};