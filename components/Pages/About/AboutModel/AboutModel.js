import React from 'react';

import styles from '../../../../styles/AboutModel.module.css';

const AboutModel = () => {
  return (
    <div className={styles.model}>
      <h2>
        Learn how the <span>Chapter Box Model</span> can help you
      </h2>
      <div className={styles.models}>
        <p>model 1</p>
        <p>model 2</p>
        <p>model 3</p>
        <p>model 4</p>
        <p>model 5</p>
      </div>
    </div>
  );
};

export default AboutModel;
