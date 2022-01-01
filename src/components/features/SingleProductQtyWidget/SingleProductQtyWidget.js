import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { qtyUp, qtyDown } from '../../../redux/cartRedux.js';

import styles from './SingleProductQtyWidget.module.scss';

import { Button } from '../../common/Button/Button';


const Component = ({className, qty, qtyUp, qtyDown }) => (
  <div className={clsx(className, styles.root)}>

    <div className='container'>
      <div className={styles.freeze}>
        <div className='row'>
          <div className={'col-1 ' + styles.buttonContainer}>
            <Button className={styles.innerButton} variant='quantityChange' onClick={() => qtyDown()}>-</Button>
          </div>

          <div className={'col-1 '  + styles.quantity}>{qty}</div>
          
          <div className={'col-1 '  + styles.buttonContainer}>
            <Button className={styles.innerButton} variant='quantityChange' onClick={() => qtyUp()}>+</Button>
          </div>
          
        </div>

      </div>
    </div>

  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  qty: PropTypes.number,
  qtyUp: PropTypes.func,
  qtyDown: PropTypes.func,
};

// const mapStateToProps = state => ({
// });

// const mapDispatchToProps = dispatch => ({
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as SingleProductQtyWidget,
  // Container as SingleProductQtyWidget,
  Component as SingleProductQtyWidgetComponent,
};