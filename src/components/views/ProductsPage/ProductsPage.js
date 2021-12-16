import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductsPage.module.scss';

import { Products } from '../../features/Products/Products';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <h3>It is nice to see you here. Please choose from our wide range of products.</h3>
    {/* {children} */}
    <Products />
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
  Component as ProductsPage,
  // Container as ProductsPage,
  Component as ProductsPageComponent,
};