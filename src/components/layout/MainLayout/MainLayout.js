import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { fetchAllProducts } from '../../../redux/productsRedux.js';

import styles from './MainLayout.module.scss';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Logo } from '../../common/Logo/Logo';

const Component = ({className, children, fetchAllProducts}) => {

  React.useEffect(() => {
    fetchAllProducts();
  }, []);
  
  return (
    <div className={clsx(className, styles.root)}>
      <Header />
      <Logo />
      <div className={'container ' + styles.pageWrapper}>
        {/* <div className='row'> */}
        {/* <Logo /> */}
        {children}
        {/* </div> */}
      </div>
      <Footer />
    </div>  
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fetchAllProducts: PropTypes.func,
};

const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as MainLayout,
  Container as MainLayout,
  Component as MainLayoutComponent,
};