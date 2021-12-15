import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Highlights.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className='container'>
      <div className='row'>
        {/* <div className='col-12'> */}
        <img className={styles.highlightPhoto} src={'https://www.trends.nz/Images/Banners/Banners_loggedout/6167a6444ddd3.jpg?20211215'} alt='' />
        {/* </div> */}
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
  Component as Highlights,
  // Container as Highlights,
  Component as HighlightsComponent,
};