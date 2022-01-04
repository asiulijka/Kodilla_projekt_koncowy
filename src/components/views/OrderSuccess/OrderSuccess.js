import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './OrderSuccess.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <h3>Your order has been send</h3>
    <p><strong className={styles.strong}>T</strong>hank you for shopping with us.
    </p>
    <p>
      <strong className={styles.strong}>O</strong>ur friendly team will contact you shortly.
    </p>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as OrderSuccess,
  Component as OrderSuccessComponent,
};