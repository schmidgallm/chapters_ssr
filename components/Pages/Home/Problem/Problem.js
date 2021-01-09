// Dependencies
import React, { useState, Fragment } from 'react';
import Link from 'next/link';

// CSS
import styles from '../../../../styles/Problem.module.css';

const Problem = () => {
  return (
    <div className='section'>
      <div className={styles.problem}>
        <div>
          <h2>
            How Chapter Box can <span>help you</span>
          </h2>
          <hr />
          <ul>
            <li>
              We all have thoughts of great stories filled with imagination. So
              why is it only <span>97% of writers never complete</span> thier
              novel?
            </li>
            <li>
              <span>80% of people</span> seriously try writing as a career
            </li>
          </ul>
          <Link href='/register'>
            <a className='mt-4 btn btn-primary'>Join Free Now</a>
          </Link>
        </div>
        <div>
          <p>Is Chapter Box good a good fit for you?</p>
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
            <h5>Want to get piad for writing</h5>
            <i className='ml-auto fa fa-check-circle'></i>
          </div>
          <div className={styles.option}>
            <i className='fa fa-pencil'></i>
            <h5>Want to become an author</h5>
            <i className='ml-auto fa fa-check-circle'></i>
          </div>
          <div className={styles.option}>
            <i className='fa fa-frown-o'></i>
            <h5>Tired of stories with bad ending</h5>
            <i className='ml-auto fa fa-check-circle'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
