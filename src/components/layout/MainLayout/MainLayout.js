import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Logo } from '../../common/Logo/Logo';
import { fetchAllProducts, getAll as getAllProducts } from '../../../redux/productsRedux.js';

import styles from './MainLayout.module.scss';

const Component = ({className, children, products, fetchAllProducts}) => {

  React.useEffect(() => {
    if (products.length === 0){
      fetchAllProducts();
    }
  }, [fetchAllProducts, products]);
  
  return (
    <div className={clsx(className, styles.root)}>
      <Header />
      <Logo />
      <div className={'container ' + styles.pageWrapper}>
        {children}
      </div>
      <Footer />
    </div>  
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fetchAllProducts: PropTypes.func,
  products: PropTypes.array,
};

const mapStateToProps = state => ({
  products: getAllProducts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as MainLayout,
  Component as MainLayoutComponent,
};