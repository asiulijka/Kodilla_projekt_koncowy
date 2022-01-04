import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './About.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <h3>About us</h3>
    <p><strong className={styles.strong}>L</strong>orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu neque vel nisl facilisis malesuada. 
      Sed viverra ultricies orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      Sed sit amet tortor suscipit nunc pulvinar blandit. Nulla vulputate dictum metus. 
      Vivamus eleifend gravida odio eu condimentum. Nulla ac elit non est varius finibus sed quis diam.
    </p>
    <p>
      <strong className={styles.strong}>N</strong>ulla eu laoreet justo, ut aliquam nunc. Nam odio mauris, dictum et ipsum sed, elementum tincidunt lacus. 
      Etiam dictum faucibus orci, sed tempor neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
      Nulla volutpat, odio nec hendrerit ullamcorper, lacus orci gravida neque, scelerisque faucibus dolor enim nec urna. 
      Donec vel hendrerit nibh, sed fermentum felis. Integer bibendum enim magna, at varius sem vehicula at. 
      In euismod consequat nunc ut scelerisque. Cras blandit orci et lacus iaculis aliquam. Fusce et consequat massa, in sollicitudin orci. 
      Sed venenatis turpis quis dolor tempus ultricies. Donec pretium eget erat non feugiat. Ut egestas, sem a auctor blandit, lacus est suscipit metus, id consectetur nibh mi quis nisl. 
      Vestibulum pretium gravida dictum. Etiam vel libero ut est luctus tristique eu tempus est.
    </p>
    <p>
      <strong className={styles.strong}>N</strong>ullam vel tellus ac velit rhoncus ultricies. Quisque vel fermentum ex. Curabitur nec elit interdum, accumsan felis id, consequat elit. 
      Quisque laoreet enim in ex aliquam varius. Sed nec lectus augue. Duis viverra vehicula magna, ac luctus elit tempor sit amet. 
      Nulla facilisi. Nullam ac lorem ac neque ultricies varius. Nam nec augue interdum, hendrerit felis laoreet, rhoncus risus. 
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris lobortis porttitor sollicitudin. 
      Aenean congue a lectus in aliquam. Nunc mollis in mauris ac sagittis. Suspendisse potenti.
    </p>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as About,
  Component as AboutComponent,
};