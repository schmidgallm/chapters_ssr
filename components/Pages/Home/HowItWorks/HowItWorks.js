// Dependencies
import React from 'react';
import Link from 'next/link';

import styles from '../../../../styles/HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <div className='section'>
      <h2>
        <span>Writing is hard.</span> So we make it easy.
      </h2>
      <p className={`mt-3 ${styles.paragraph}`}>
        You have the ideas, we have the words. From beginner to advanced, follow
        our super easy to follow process and your story can become reality in no
        time.
      </p>

      <div className={styles.steps}>
        <div className={styles.step}>
          <i class='fa fa-compass'></i>
          <h4>Book Coaching</h4>
          <p>
            Self paced, guided step by step instructions on crafting your book.
          </p>
          <Link href='/coaching'>
            <a className='btn btn-outline-primary'>See More</a>
          </Link>
        </div>
        <div className={styles.step}>
          <i className='fa fa-paragraph'></i>
          <h4>Book Editing</h4>
          <p>
            Our grammar police will tie in all those loose ends and mistakes.
          </p>
          <Link href='/editing'>
            <a className='btn btn-outline-primary'>See More</a>
          </Link>
        </div>
        <div className={styles.step}>
          <i className='fa fa-edit'></i>
          <h4>Book Writing</h4>
          <p>
            We do all the writing and take your idea into a professional book.
          </p>
          <Link href='/writing'>
            <a className='btn btn-outline-primary'>See More</a>
          </Link>
        </div>
        <div className={styles.step}>
          <i className='fa fa-book'></i>
          <h4>Book Publishing</h4>
          <p>Taking your finsihed manuscript and publishing it to the world.</p>
          <Link href='/publishing'>
            <a className='btn btn-outline-primary'>See More</a>
          </Link>
        </div>
      </div>
      <Link href='/virtualtour'>
        <a className='btn btn-primary'>Take a Virtual Tour Of Platform</a>
      </Link>
    </div>
  );
};

export default HowItWorks;
