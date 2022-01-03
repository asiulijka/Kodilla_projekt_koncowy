import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Logo.module.scss';
import logoW from './logo_white_bg.PNG';

const Component = ({ className }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={'container ' + styles.pageWrapper}>
        <img src={logoW} alt='no img' />
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Logo,
  Component as LogoComponent,
};