// Dependencies
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Typed from 'typed.js';

// CSS
import styles from '../../../../styles/Header.module.css';

const Header = () => {
  const typeTarget = useRef(null);
  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ['Write', 'Plan', 'Edit', 'Publish'],
      typeSpeed: 125,
      loop: true,
      backSpeed: 75,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerCopy}>
          <h1>
            Professional Book services helping beginner authors
            <br />
            <span ref={typeTarget} /> their first book.
          </h1>
          <hr />
          <h4>
            Everyone has an <span>Idea</span>. Anyone can become an{' '}
            <span>Author</span>
          </h4>
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
          <div className={styles.imageContainer}>
            <img
              src='/static/chapters_header_book.png'
              alt='book mockup showing your name as author'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
