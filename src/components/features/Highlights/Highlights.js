import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Highlights.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className='container'>
      <div className='row'>
        <img className={styles.highlightPhoto} src={'https://www.trends.nz/Images/Banners/Banners_loggedout/6167a6444ddd3.jpg?20211215'} alt='' />
      </div>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Highlights,
  Component as HighlightsComponent,
};