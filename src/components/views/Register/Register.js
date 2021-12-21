import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Register.module.scss';

import { Button } from './../../common/Button/Button';
import { Link } from 'react-router-dom';

const Component = ({className, children}) => (
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

      <p>If you already have your username, please <Link className={styles.pRegister} to='/login'>LOGIN</Link></p>
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
  Component as Register,
  // Container as Register,
  Component as RegisterComponent,
};