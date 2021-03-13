// Dependencies
import React from 'react';
import Link from 'next/link';

// Components
import AuthWrapper from '../components/Layout/AuthWrapper';

// CSS
import styles from '../styles/success.module.css';

const success = () => {
  return (
    <AuthWrapper>
      <div className={styles.success}>
        <h1>Horray!!!</h1>
        <p>You are all set up and ready to go!</p>
        <p>Click to below to launch Chapter Box</p>
        <Link href='https://google.com/' passHref={true}>
          <a className='btn btn-primary'>Launch App</a>
        </Link>
      </div>
    </AuthWrapper>
  );
};

export default success;
