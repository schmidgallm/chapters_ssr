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
          <button className='btn btn-primary'>
            <Link href='/register'>
              <a>Join Free Now</a>
            </Link>
          </button>
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
