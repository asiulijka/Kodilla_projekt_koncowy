import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Button.module.scss';

const Component = ({variant='', className, onClick, children}) => {

  return (
    <div className={clsx(className, styles.root)}>
      <button 
        className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')} 
        onClick={onClick}
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
  onClick: PropTypes.func,
};

export {
  Component as Button,
  Component as ButtonComponent,
};