// Dependencies
import React, { useState, useEffect } from 'react';

// Components
import AuthWrapper from '../components/Layout/AuthWrapper';
import RegisterHeader from '../components/Pages/Register/RegisterHeader';
import RegisterForm from '../components/Auth/RegisterForm';
import Loader from '../components/Layout/Loader';

// CSS
import styles from '../styles/register.module.css';

export default function register() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const url = window.location.search
      .split('=')
      .pop()
      .replace(/\+/g, ' ')
      .replace(/\%40/g, '@');
    setUserEmail(url);
  }, []);

  return userEmail ? (
    <AuthWrapper>
      <div className={styles.register}>
        <RegisterHeader />
        <RegisterForm userEmail={userEmail} />
      </div>
    </AuthWrapper>
  ) : (
    <Loader />
  );
}
