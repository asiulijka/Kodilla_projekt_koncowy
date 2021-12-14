import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Button.module.scss';

// import { Button } from 'react-bootstrap';




const Component = ({variant='', className, children}) => {

  // const classes = [];

  // if (variant) classes.push(styles[variant]);
  // else classes.push('main');

  return (
    <div className={clsx(className, styles.root)}>
      {/* <Button className={classes.join(' ')} > */}
      {/* react button */}
      {/* {children}
      </Button> */}
      <button 
        // {...otherProps} 
        className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')} 
      >
        {children}
      </button>

    </div>
  );
};



Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Button,
  // Container as Button,
  Component as ButtonComponent,
};