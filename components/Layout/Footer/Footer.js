// Dependencies
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

// CSS
import styles from '../../../styles/Footer.module.css';

const Footer = () => {
  // Init state
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  // on change handler
  const onChange = e => setUserEmail(e.target.value);

  // on submit handler
  const onSubmit = async e => {
    // prevent from from submitting
    e.preventDefault();

    // start loading ui
    setLoading(true);

    // no email in form
    if (!userEmail) {
      return alert('Please fill in email');
    }

    // send post request
    const url = 'https://chapters-api.herokuapp.com/api/v1';
    try {
      const request = await axios({
        method: 'POST',
        url: `${url}/subscribe`,
        headers: { 'Content-Type': 'application/json' },
        data: {
          email: userEmail,
        },
      });

      // once request is complete
      if (request.status === 200 && request.data) {
        // set loading to false
        setLoading(false);
        // set success message
        setMsg('Check your email!');
      }
    } catch (err) {
      setLoading(false);
      setMsg('Uh Oh! Something went wrong. Please try againx');
      console.log(err);
      console.log(err.response.data);
    }
  };

  return (
    <footer className={`section ${styles.footer}`}>
      <div className={styles.footerCTA}>
        <h2>
          Get the tools to become the next best selling New York Times author
        </h2>
        <hr />
        {!loading && msg && (
          <h5 className={`${styles.subscribeMessage} animated tada`}>
            Fantastic! We will try and keep the emails to a minimum!
          </h5>
        )}
        <form onSubmit={onSubmit}>
          <input
            type='email'
            required
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter your email'
            onChange={e => onChange(e)}
          />

          <button type='submit' className='btn btn-primary'>
            {loading ? (
              <img
                width={80}
                height='30'
                src='/static/loader_alt.gif'
                alt='loading'
              />
            ) : (
              'Join our Community'
            )}
          </button>
        </form>
        <p>
          Already part of the community? Sign in{' '}
          <Link href='/'>
            <a>Here</a>
          </Link>{' '}
        </p>
        <h1>Chapter Box</h1>
      </div>
    </footer>
  );
};

export default Footer;
