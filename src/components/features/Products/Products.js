import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';

import { getAll as getAllProducts } from '../../../redux/productsRedux.js';
import { ProductBox } from '../../common/ProductBox/ProductBox';

import styles from './Products.module.scss';

const Component = ({className, products}) => {
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
};

const mapStateToProps = state => ({
  products: getAllProducts(state),
});

const mapDispatchToProps = dispatch => ({
  // fetchAllProducts: () => dispatch(fetchAllProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Products,
  Component as ProductsComponent,
};