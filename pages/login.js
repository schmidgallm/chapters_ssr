import React, { Fragment } from 'react';
import NextHead from '../components/Layout/NextHead';
import Navbar from '../components/Layout/Navbar';

import LoginForm from '../components/Auth/LoginForm';

import styles from '../styles/login.module.css';

const login = () => {
  return (
    <Fragment>
      <NextHead title='Chapter Box | Login' />
      <Navbar />
      <div className={styles.login}>
        <LoginForm />
      </div>
    </Fragment>
  );
};

export default login;
