import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll as getAllProducts } from '../../../redux/productsRedux.js';

import { fetchAllProducts } from '../../../redux/productsRedux.js';

import styles from './Products.module.scss';

import { ProductBox } from '../../common/ProductBox/ProductBox';

const Component = ({className, fetchAllProducts, products}) => {
  
  React.useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className={clsx(className, styles.root)}>
      <div className='container'>
        <div className='row'>
          {
            products.map(product => (
              <div className={`col-3 ${styles.productBox}`} key={product._id}>
                <ProductBox {...product} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};



Component.propTypes = {
  products: PropTypes.array,
  className: PropTypes.string,
  fetchAllProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  products: getAllProducts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Products,
  Container as Products,
  Component as ProductsComponent,
};