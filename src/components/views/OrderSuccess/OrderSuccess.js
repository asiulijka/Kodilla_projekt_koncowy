import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './OrderSuccess.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <h3>Your order has been send</h3>
    <p><strong className={styles.strong}>T</strong>hank you for shopping with us.
    </p>
    <p>
      <strong className={styles.strong}>O</strong>ur friendly team will contact you shortly.
    </p>
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
  Component as OrderSuccess,
  // Container as OrderSuccess,
  Component as OrderSuccessComponent,
};