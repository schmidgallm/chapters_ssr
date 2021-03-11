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
          <Link href='/register'>
            <a className={`btn btn-primary ${styles.headerCTA}`}>
              Join Free Now
            </a>
          </Link>
          <p>
            Already a member? Sing in{' '}
            <Link href='/'>
              <a>Here</a>
            </Link>{' '}
          </p>
        </div>
        <div className={styles.headerVideo}>
          <div className={styles.headerVideoContainer}>
            <iframe
              frameBorder='0'
              width='560'
              height='315'
              src='https://biteable.com/watch/embed/frank-character-explainer-copy-2811131/eb6d7ee415b0f622a176e5d14e3c333e'
              allowFullScreen='true'
              allow='autoplay'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
