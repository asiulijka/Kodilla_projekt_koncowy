import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ChooseQty.module.scss';

import { Button } from './../../common/Button/Button';


const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>

    <div className='container'>
      <div className={'row ' + styles.freeze}>
        {/* <div className={'row ' + styles.addToCartContainer}> */}

        {/* <div className={'col-1 '  + styles.buttonContainer}> */}
        {/* <Button className={'col-1 ' + styles.buttonNegative} variant='quantityChange'>-</Button> */}
        <Button className={'col-1 ' + styles.buttonContainer} variant='quantityChange'>-</Button>
        {/* </div> */}

        {/* <div> */}
        <div className={'col-1 '  + styles.quantity}>202</div>
        {/* </div> */}


        
        
        {/* <div className={'col-1 ' + styles.buttonContainer}> */}
        {/* <Button className={'col-1 '  + styles.buttonPositive} variant='quantityChange'>+</Button> */}
        <Button className={'col-1 '  + styles.buttonContainer} variant='quantityChange'>+</Button>
        {/* </div>  */}

      </div>
    </div>


    {children}


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
  Component as ChooseQty,
  // Container as ChooseQty,
  Component as ChooseQtyComponent,
};