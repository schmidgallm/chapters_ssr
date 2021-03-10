// Dependencies
import React from 'react';
import Link from 'next/link';

// CSS
import styles from '../../../../styles/Proof.module.css';

const Proof = () => {
  return (
    <div className='section section-dark'>
      <div className={styles.proof}>
        <div className={styles.proofHeader}>
          <h2>Everyone deserves to be a great selling author.</h2>
          <hr />
          <p>
            Take all the fear and guess work out of creating a book. Follow our
            step by step process and being your journey today.
          </p>
          <div className={styles.proofLink}>
            <Link href='/register'>
              <a className='btn btn-secondary'>Join Now</a>
            </Link>
          </div>
        </div>
        <div className={styles.proofImage}></div>
      </div>
    </div>
  );
};

export default Proof;
