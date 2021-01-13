// Dependencies
import React, { useEffect } from 'react';

// Gtag for analytics
import * as gtag from '../lib/gtag';

// Components
import AuthWrapper from '../components/Layout/AuthWrapper';
import RegisterHeader from '../components/Pages/Register/RegisterHeader';
import RegisterForm from '../components/Auth/RegisterForm';

// CSS
import styles from '../styles/register.module.css';

export default function register() {
  useEffect(() => {
    gtag.event({
      action: 'register page',
      category: 'register',
      label: 'pageview',
    });
  });
  return (
    <AuthWrapper>
      <div className={styles.register}>
        <RegisterHeader />
        <RegisterForm />
      </div>
    </AuthWrapper>
  );
}
