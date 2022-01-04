import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Logo } from '../../common/Logo/Logo';
import { fetchAllProducts } from '../../../redux/productsRedux.js';

import styles from './MainLayout.module.scss';

const Component = ({className, children, fetchAllProducts}) => {

  React.useEffect(() => {
    fetchAllProducts();
  }, []);
  
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
};

const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as MainLayout,
  Component as MainLayoutComponent,
};