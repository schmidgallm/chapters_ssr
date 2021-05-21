// Dependencies
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

// CSS
import styles from '../../../styles/RegisterForm.module.css';

const LoginForm = () => {
  // init nextjs router
  const router = useRouter();

  // init state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const { email, password } = formData;

  // on change handler
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // on submit handler
  const onSubmit = async e => {
    setLoading(true);
    e.preventDefault();
    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`;
    try {
      const request = await axios({
        method: 'POST',
        url,
        headers: { 'Content-Type': 'application/json' },
        data: {
          email,
          password,
        },
      });

      console.log(request);

      // once request is complete redirect to app domain
      if (request.status === 200 && request.data) {
        // set loading to false
        setLoading(false);
        // redirect to redirect page
        router.push('/success');
      }
    } catch (err) {
      // set loading to false
      setLoading(false);
      console.log(err);
      console.log(err.response.data.errors);
      setErrors(err.response.data.errors);
    }
  };

  return (
    <div className={styles.registerForm}>
      <div className={styles.formContainer}>
        <form onSubmit={onSubmit}>
          <h3>Login to Chapter Box</h3>
          <hr className={styles.formHr} />

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
          {errors && (
            <div className={styles.registerErrors}>
              {errors.map((err, i) => (
                <p className='animate__animated animate__slideInRight' key={i}>
                  {err.msg}
                </p>
              ))}
            </div>
          )}
          <button type='submit' className='register-btn btn btn-primary'>
            {loading ? (
              <img
                src='/static/loader_alt.gif'
                alt='loading'
                height={20}
                width={80}
              />
            ) : (
              'Submit'
            )}
          </button>
          <hr className={styles.formBottomHr} />
          <p>
            Don't have an account?{' '}
            <Link href='/register' className='btn btn-primary'>
              <a>Register Here</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
