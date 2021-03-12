// Dependencies
import React, { useState, Fragment } from 'react';
import Link from 'next/link';

// CSS
import styles from '../../../../styles/Problem.module.css';

const Problem = () => {
  return (
    <div className='section'>
      <div className={styles.problem}>
        <div className={styles.problemImageContainer}>
          <img
            src='/static/header_spinning_book.gif'
            alt='mockup of book with your name as author'
          />
        </div>
        <div className={styles.problemHeader}>
          <h2>
            Can Chapter Box <span>help you?</span>
          </h2>
          <hr />
          <div className={styles.option}>
            <i className='fa fa-lightbulb-o'></i>
            <h5>Have great story ideas</h5>
            <i className='ml-auto fa fa-check-circle'></i>
          </div>
          <div className={styles.option}>
            <i className='fa fa-book'></i>
            <h5>Never written full novel</h5>
            <i className='ml-auto fa fa-check-circle'></i>
          </div>
          <div className={styles.option}>
            <i className='fa fa-dollar'></i>
            <h5>Want to get paid writing</h5>
            <i className='ml-auto fa fa-check-circle'></i>
          </div>
          <div className={styles.option}>
            <i className='fa fa-pencil'></i>
            <h5>Writing my book for me</h5>
            <i className='ml-auto fa fa-check-circle'></i>
          </div>
          <div className={styles.option}>
            <i className='fa fa-smile-o'></i>
            <h5>Becoming a published author</h5>
            <i className='ml-auto fa fa-check-circle'></i>
          </div>
        </div>
      </div>
      <Link href='/register'>
        <a className='mt-4 btn btn-primary'>Join Free Now</a>
      </Link>
    </div>
  );
};

export default Problem;

/*
<h4>
  have thoughts of great stories filled with imagination. So why is it
  only <span>97% of writers never complete</span> thier novel?
</h4>;

  <span>80% of people</span> seriously try writing as a career
*/
