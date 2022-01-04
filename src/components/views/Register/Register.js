import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Button } from './../../common/Button/Button';
import { Link } from 'react-router-dom';

import styles from './Register.module.scss';


const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.mainContainer}>
      <form className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className={styles.inputForm}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Choose Your Username"
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
          <input
            type="password"
            placeholder="Repeat Password"
            name="password"
            className={styles.inputForm}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <Button variant='main'>
            Register
          </Button>
        </div>
      </form>
      <p>If you <u>already have</u> your username, please <Link className={styles.pRegister} to='/login'>LOGIN</Link></p>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Register,
  Component as RegisterComponent,
};