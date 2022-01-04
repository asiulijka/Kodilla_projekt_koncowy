import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Component = ({className}) => (
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
  className: PropTypes.string,
};

export {
  Component as Header,
  Component as HeaderComponent,
};