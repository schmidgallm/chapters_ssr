// Dependencies
import React, { useState } from 'react';
import Link from 'next/link';

// CSS
import styles from '../../../styles/RegisterForm.module.css';

const RegisterForm = ({ userEmail }) => {
  // init state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  const { firstName, lastName, email, password, password2 } = formData;

  // on change handler
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // on submit handler
  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      // set alert here
      alert('Passwords dont match');
    }
    // Redirect to app domain with token
  };

  // Redirect on successful registeration

  return (
    <div className={styles.registerForm}>
      <div className={styles.formContainer}>
        <form onSubmit={onSubmit}>
          <h3>Register For Chapter Box</h3>
          <hr className={styles.formHr} />
          <div className='form-group'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='firstName'
              className='form-control'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='lastName'
              className='form-control'
              id='lastName'
              name='lastName'
              value={lastName}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='email'
              aria-describedby='emailHelp'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
            />
            <small id='emailHelp' className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password2'>Re-Enter Password</label>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              onChange={e => onChange(e)}
              required
            />
          </div>

          <button type='submit' className='register-btn btn btn-primary'>
            Submit
          </button>
          <hr className={styles.formBottomHr} />
          <p>
            Alredy have an account?{' '}
            <Link href='/login' className='btn btn-primary'>
              <a>Sign In</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
