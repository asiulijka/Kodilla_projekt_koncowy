import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { qtyUp, qtyDown } from '../../../redux/cartRedux.js';

import styles from './QtyWidget.module.scss';

import { Button } from '../../common/Button/Button';


const Component = ({className, id, qty, qtyUp, qtyDown }) => (
  <div className={clsx(className, styles.root)}>

    <div className='container'>
      <div className={styles.freeze}>
        <div className='row'>
          <div className={'col-1 ' + styles.buttonContainer}>
            <Button className={styles.innerButton} variant='quantityChange' onClick={() => qtyDown(id)}>-</Button>
          </div>

          <div className={'col-1 '  + styles.quantity}>{qty}</div>
          
          <div className={'col-1 '  + styles.buttonContainer}>
            <Button className={styles.innerButton} variant='quantityChange' onClick={() => qtyUp(id)}>+</Button>
          </div>
          
        </div>

      </div>
    </div>

  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  qty: PropTypes.number,
  id: PropTypes.string,
  qtyUp: PropTypes.func,
  qtyDown: PropTypes.func,
};

const mapStateToProps = state => ({
  // someProp: reduxSelector(state),
});

const mapDispatchToProps = dispatch => ({
  qtyUp: id => dispatch(qtyUp(id)),
  qtyDown: id => dispatch(qtyDown(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as QtyWidget,
  Container as QtyWidget,
  Component as QtyWidgetComponent,
};