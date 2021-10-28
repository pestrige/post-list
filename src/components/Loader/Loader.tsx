import React from 'react';
import styles from './Loader.module.scss';

const Spinner = (): JSX.Element => {
  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <span className={styles.ring1} />
        <span className={styles.ring2} />
      </div>
    </div>
  );
};

export default Spinner;
