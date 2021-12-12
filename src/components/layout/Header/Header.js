import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

import { NavLink } from 'react-router-dom';

// import { Cart } from './views/Cart/Cart';


const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className='container'>
      {/* <h2>Header</h2> */}
      <div className={styles.topMenu}>
        <div className={styles.subpages}>
          <ul>
            <li>
              {/* <a href='/' className={'nav-link' + styles.active}> */}
              <NavLink 
                to="/" 
                className={styles.nav}
              >
                Home
              </NavLink>
            </li>
            <li>
              {/* <a href='/' className='nav-link'> */}
              <NavLink to="/products" className={styles.nav}>
                Products
              </NavLink>
              {/* </a> */}
            </li>
            <li>
              <NavLink to="/about" className={styles.nav}>
                About us
              </NavLink>
            </li>
          </ul>

        </div>
        <div className={styles.customer}>
          <ul>
            <li>
              <NavLink to='/cart' className={styles.nav}>
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={styles.nav}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={styles.nav}>
                Register
              </NavLink>
            </li>
          </ul>
        </div>
        
      </div>

    </div>
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
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};