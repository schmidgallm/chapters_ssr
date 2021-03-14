import React from 'react';

import styles from '../../../../styles/AboutHeader.module.css';

const AboutHeader = () => {
  return (
    <header className={styles.header}>
      <h1>
        We believe <span>everyone has a story to tell</span> so our only mission
        to help you bring your idea into a <span>professional book.</span>
      </h1>
    </header>
  );
};

export default AboutHeader;
