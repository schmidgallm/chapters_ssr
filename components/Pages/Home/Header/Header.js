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
      strings: ['Plan', 'Write', 'Edit', 'Publish'],
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
        {/* Header Copy */}
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
              START YOUR BOOK NOW
            </a>
          </Link>
          <p>
            Already a member? Sing in{' '}
            <Link href='/'>
              <a>Here</a>
            </Link>{' '}
          </p>
        </div>

        {/* Header Video  */}
        <div className={styles.playerWrapper}>
          <iframe
            frameBorder='0'
            width='560'
            height='315'
            src='https://biteable.com/watch/embed/frank-character-explainer-copy-2811131'
            allowFullScreen={true}
            allow='autoplay'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Header;
