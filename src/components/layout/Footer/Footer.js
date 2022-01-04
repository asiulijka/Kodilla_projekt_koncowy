import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Footer.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className='container'>
      <div className={'col ' + styles.copyright}>
        <p>©Copyright 2021 JoannaZ | All Rights Reserved | inspired by https://www.trends.nz/</p>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Footer,
  Component as FooterComponent,
};