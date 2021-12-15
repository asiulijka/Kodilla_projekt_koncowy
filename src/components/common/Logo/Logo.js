import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Logo.module.scss';
// import {logo} from './../../public/images/Logo.png';
// @import './../../public/images/Logo.png' as logo;

// import logo from './logo.PNG';
import logoW from './logo_white_bg.PNG';

// const logo = require('Logo.PNG');

const Component = ({className, children}) => {
  return (
  
    <div className={clsx(className, styles.root)}>
      <div className={'container ' + styles.pageWrapper}>
        {/* <h2>Your Logo here</h2> */}
        {/* <img src={logo} alt='no img' /> */}
        <img src={logoW} alt='no img' />
        {/* <img src={require('./../../public/images/logo.png')} /> */}
      </div>
      {/* <h2>Your Logo here</h2> */}
      {/* <img src={require('./../../public/images/logo.png')} /> */}
    </div>
  );
};

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
  Component as Logo,
  // Container as Logo,
  Component as LogoComponent,
};