import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductBox.module.scss';

import { Link } from 'react-router-dom';

import { Button } from './../Button/Button';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    {/* <h2>It should map by ProductBox</h2>
    {children} */}

    <div className="container">
      {/* <div className="row"> */}


      <div className={styles.photo}>
        {/* <Link to={`/product/${id}`}> */}
        <Link to='/products/:id'>
          {/* <img src='' alt='product main photo' /> */}
          <img src='https://www.trends.nz/resizer/470/112140-0.jpg' alt='product main photo' />
        </Link>

      </div>

      <div className={styles.productName}>
        {/* <Link to={`/product/${id}`}> */}
        <Link className={styles.productLink} to='/products/:id'>
          <h5>Arabica Coffee Mug</h5>
        </Link>
      </div>

      <div className={styles.price}>
        <p>Price from $5</p>
      </div>


      <div className={'row ' + styles.actions}>
        {/* <div className={styles.actions}> */}

        <Button className={'col ' + styles.actionsButton} variant='main'>
          {/* <i class="fas fa-shopping-basket"></i> */}
          Add to cart + basket icon
          {/* <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART */}
          {/* <i className="fa fa-shopping-basket"></i> */}
        </Button>

   


        <Button className={'col ' + styles.actionsButton} variant='main'>
          Check for details
        </Button>
        {/* </div> */}

      </div>

        


    </div>
    {/* </div> */}
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
  Component as ProductBox,
  // Container as ProductBox,
  Component as ProductBoxComponent,
};