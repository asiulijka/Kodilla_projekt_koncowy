import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import clsx from 'clsx';
import styles from './Header.module.scss';

import { connect } from 'react-redux';
import { getAll as getAllCart } from '../../../redux/cartRedux.js';

const Component = ({className, cart}) => (
  <div className={clsx(className, styles.root)}>
    <div className='container'>
      <div className={styles.topMenu}>
        <div className={styles.subpages}>
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={styles.nav}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={styles.nav}>
                Products
              </NavLink>
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
                {cart.length ? `Cart (${cart.length})` : 'Cart'}
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
  className: PropTypes.string,
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: getAllCart(state),
});

const mapDispatchToProps = dispatch => ({
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component); 

export {
  Container as Header,
  Component as HeaderComponent,
};