// Dependencies
import React from 'react';

// Components
import AuthWrapper from '../components/Layout/AuthWrapper';
import RegisterHeader from '../components/Pages/Register/RegisterHeader';
import RegisterForm from '../components/Auth/RegisterForm';

// CSS
import styles from '../styles/register.module.css';

export default function Home() {
  return (
    <AuthWrapper>
      <div className={styles.register}>
        <RegisterHeader />
        <RegisterForm />
      </div>
    </AuthWrapper>
  );
}
