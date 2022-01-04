import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { Button } from './../../common/Button/Button';
import styles from './Login.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.mainContainer}>
      <form className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Email or Username"
            name="email"
            className={styles.inputForm}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className={styles.inputForm}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <Button variant='main'>
            Login
          </Button>
        </div>
      </form>
      <p>If you dont have your username, please <Link className={styles.pRegister} to='/register'>REGISTER</Link></p>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Login,
  Component as LoginComponent,
};