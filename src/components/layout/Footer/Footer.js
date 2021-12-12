import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   FaTwitter,
//   FaFacebookF,
//   FaYoutube,
//   FaGooglePlusG,
//   FaLinkedinIn,
//   FaPinterestP,
// } from 'react-icons/fa';


const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>

    <div className='container'>
      {/* <h2>Footer</h2> */}
  
      <div className={'col-lg-4 col-md-6 ' + styles.copyright}>
        <p>©Copyright 2021 JoannaZ | All Rights Reserved</p>
      </div>

      {/* <div className={'col-lg-4 col-md-6 ' + styles.socialMedia}>
        <ul>
          <li>
            <a href='/'>
              <FontAwesomeIcon icon={FaTwitter}>Twitter</FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href='/'>
              <FontAwesomeIcon icon={FaFacebookF}>Facebook</FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href='/'>
              <FontAwesomeIcon icon={FaYoutube}>YouTube</FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href='/'>
              <FontAwesomeIcon icon={FaGooglePlusG}>Google Plus</FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href='/'>
              <FontAwesomeIcon icon={FaLinkedinIn}>LinkedIn</FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href='/'>
              <FontAwesomeIcon icon={FaPinterestP}>Pinterest</FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </div>  */}
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
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};