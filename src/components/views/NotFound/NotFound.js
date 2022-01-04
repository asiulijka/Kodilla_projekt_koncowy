import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NotFound.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>   
    <h2>NotFound</h2>
    <p>Please check your credentials</p>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as NotFound,
  Component as NotFoundComponent,
};