// Dependencies
import React from 'react';
import Link from 'next/link';

// CSS
import styles from '../../../styles/RegisterHeader.module.css';

const RegisterHeader = () => {
  return (
    <div className={styles.registerHeader}>
      <div className={styles.registerCopy}>
        <Link href='/'>
          <h1>Chapter Box</h1>
        </Link>
        <hr />
        <h2>
          Leading the best community driven novels where you control the story
        </h2>
        <p>Already a member?</p>
        <button className='btn btn-primary'>Login Here</button>
      </div>
    </div>
  );
};

export default RegisterHeader;
