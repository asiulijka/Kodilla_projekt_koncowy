import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Products } from '../../features/Products/Products';
import styles from './ProductsPage.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <h3>It is nice to see you here. Please choose from our wide range of products.</h3>
    <Products />
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as ProductsPage,
  Component as ProductsPageComponent,
};