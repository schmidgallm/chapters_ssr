// Dependencies
import React from 'react';
import Link from 'next/link';

import styles from '../../../../styles/ThePlan.module.css';

const ThePlan = () => {
  return (
    <div className='section section-alt'>
      <h2>
        How <span>It Works</span>
      </h2>
      <div className={styles.steps}>
        <div className={styles.step}>
          <i className='fa fa-compass'></i>
          <h4>Outlining Help</h4>
          <p>
            We help you outline your story exactly how it should be with easy to
            follow process.
          </p>
          <Link href='/coaching'>
            <a className='btn btn-outline-primary'>See More</a>
          </Link>
        </div>
        <div className={styles.step}>
          <i className='fa fa-paragraph'></i>
          <h4>Chapter Guides</h4>
          <p>
            20 chapter breakdown with step by step instruction on eactly what
            should happen in each chapter.
          </p>
          <Link href='/editing'>
            <a className='btn btn-outline-primary'>See More</a>
          </Link>
        </div>
        <div className={styles.step}>
          <i className='fa fa-edit'></i>
          <h4>Publishing Tips</h4>
          <p>
            Help with editing, formatting, book cover design, marketing, and
            publising your book to Amazon
          </p>
          <Link href='/writing'>
            <a className='btn btn-outline-primary'>See More</a>
          </Link>
        </div>
      </div>
      <Link href='/virtualtour'>
        <a className='btn btn-primary'>Begin Your Book Now</a>
      </Link>
    </div>
  );
};

export default ThePlan;
