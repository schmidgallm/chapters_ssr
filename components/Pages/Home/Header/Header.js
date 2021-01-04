// Dependencies
import React from 'react';
import Link from 'next/link';

// CSS
import styles from '../../../../styles/Header.module.css';

const Header = () => {
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
          <form>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Your Email Address'
            />
            <button className='btn btn-primary'>Join Free Now</button>
          </form>
          <p>
            Already a member? Sing in{' '}
            <Link href='#'>
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
