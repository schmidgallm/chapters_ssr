// Dependencies
import React from 'react';
import Image from 'next/image';

// CSS
import styles from '../../../../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.copy}>
        <h1 className={styles.fontLight}>
          Change the <span className={styles.fontBold}>Story</span>
        </h1>
        <p>
          Join the fastest growing of writers who want to get their story out
          but might find it hard to write the details.
        </p>
        <button className='btn btn-primary'>Join Now</button>
      </div>
    </div>
  );
};

export default Header;
