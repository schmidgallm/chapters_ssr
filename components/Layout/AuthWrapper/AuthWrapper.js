// Dependencies
import React from 'react';

// Componentns
import NextHead from '../NextHead';

// CSS
import styles from '../../../styles/Wrapper.module.css';

const Wrapper = props => {
  return (
    <div className={styles.layoutWrapper}>
      <NextHead />
      {props.children}
    </div>
  );
};

export default Wrapper;
