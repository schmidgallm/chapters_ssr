// Dependencies
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// CSS
import styles from '../../../../styles/Header.module.css';

const Header = () => {
  // init next router
  const router = useRouter();

  // Init state
  const [userEmail, setUserEmail] = useState('');

  // on change handler
  const onChange = e => setUserEmail(e.target.value);

  // on submit handler
  const onSubmit = e => {
    e.preventDefault();
    if (!userEmail) {
      return alert('Please fill in email');
    }
    router.push({
      pathname: '/register',
      query: { data: userEmail },
    });
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerCopy}>
          <h1>
            Everyone has an <span>Idea</span>. Anyone can become an{' '}
            <span>Author</span>
          </h1>
          <hr />
          <h3>
            Community based novels where you control the story. Each chapter is
            created by you and chosen chapter is voted by community.
          </h3>
          <h4>Start 2021 brand new and make money one chapter at a time.</h4>
          <form onSubmit={onSubmit}>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              required
              aria-describedby='emailHelp'
              placeholder='Your Email Address'
              value={userEmail}
              onChange={e => onChange(e)}
            />
            <button className='btn btn-primary' type='submit'>
              Join Free Now
            </button>
          </form>
          <p>
            Already a member? Sing in{' '}
            <Link href='/'>
              <a>Here</a>
            </Link>{' '}
          </p>
        </div>
        <div className={styles.headerImage}>
          <img src='/static/chapters_header_book.png' alt='spinning book' />
        </div>
      </div>
    </div>
  );
};

export default Header;
