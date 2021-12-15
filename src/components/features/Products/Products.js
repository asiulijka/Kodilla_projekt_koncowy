import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Products.module.scss';

import { ProductBox } from '../../common/ProductBox/ProductBox';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className='container'>
      <div className='row'>
        <div className={`col-3 ${styles.productBox}`}>
          <ProductBox />
        </div>
        <div className={`col-3 ${styles.productBox}`}>
          <ProductBox />
        </div>
        <div className={`col-3 ${styles.productBox}`}>
          <ProductBox />
        </div>
        <div className={`col-3 ${styles.productBox}`}>
          <ProductBox />
        </div>
        <div className={`col-3 ${styles.productBox}`}>
          <ProductBox />
        </div>
        <div className={`col-3 ${styles.productBox}`}>
          <ProductBox />
        </div>
        <div className={`col-3 ${styles.productBox}`}>
          <ProductBox />
        </div>
        <div className={`col-3 ${styles.productBox}`}>
          <ProductBox />
        </div>
      </div>
    </div>


    {/* <div className={`row ${isFading ? styles.fadeIn : styles.fadeOut}`}>
      {categoryProducts
        .slice(activePage * productCount, (activePage + 1) * productCount)
        .map(item => (
          <div key={item.id} className={columnClass}>
            <ProductBox {...item} addRating={addRating} />
          </div>
        ))}
    </div> */}






    {/* <ProductBox /> */}
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
  Component as Products,
  // Container as Products,
  Component as ProductsComponent,
};