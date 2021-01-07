// Dependencies
import React from 'react';
import Link from 'next/link';

// CSS
import styles from '../../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={`section ${styles.footer}`}>
      <div className={styles.footerCTA}>
        <h2>
          Get the tools to become the next best selling New York Times author
        </h2>
        <hr />
        <form>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />

          <button type='submit' className='btn btn-primary'>
            Join our Community
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

/*
  <div className={styles.socialLinks}>
          <i class='fa fa-facebook'></i>
          <i class='fa fa-twitter'></i>
          <i class='fa fa-linkedin'></i>
        </div>
*/
