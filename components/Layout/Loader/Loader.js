// Dependences
import React from 'react';

// CSS
import styles from '../../../styles/Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderGif}></div>
    </div>
  );
};

export default Loader;
