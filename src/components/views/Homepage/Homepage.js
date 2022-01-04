import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Highlights } from '../../features/Highlights/Highlights';
import { Products } from '../../features/Products/Products';

import styles from './Homepage.module.scss';


const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>    
    <Highlights />
    <Products />
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Homepage,
  Component as HomepageComponent,
};