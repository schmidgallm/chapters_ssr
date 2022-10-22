// Dependencies
import React, { useState, Fragment } from 'react';
import Link from 'next/link';

// CSS
import styles from '../../../../styles/TheGuide.module.css';

const TheGuide = () => {
  return (
    <Fragment>
      <div className={`section section-alt ${styles.graph}`}>
        <div className={styles.graphImg}></div>
        <div className={styles.graphCopy}>
          <h2>
            What is <span>Chapter Box?</span>
          </h2>
          <ul>
            <li>
              <h3>
                Easy-to-use methodology to write, develop, and publish a book.
              </h3>
            </li>
            <li>
              <h3>Organizer of your thoughts and plot.</h3>
            </li>
            <li>
              <h3>Book in a box template for you to follow.</h3>
            </li>
          </ul>
        </div>
      </div>
      <div className='section section'>
        <h2>
          Everyone deserves to be a <span>great selling author.</span>
        </h2>
        <hr className={styles.guideHr} />
        <div className={styles.guideCopy}>
          <p>
            Take all the fear and guess work out of creating a book. Follow our
            step by step process and being your journey today.
          </p>
          <p>
            The global pandemic has made people realize that today is the day to
            start doing the things they have been putting off. You have always
            wanted to make your stories come to life. Now is the time.
          </p>
        </div>

        <div className={styles.guide}>
          <div className={styles.guideImageContainer}>
            <img
              src='/static/header_spinning_book.gif'
              alt='mockup of book with your name as author'
            />
          </div>
          <div className={styles.guideHeader}>
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
              <i className='fa fa-frown-o'></i>
              <h5>Confused on writing a book</h5>
              <i className='ml-auto fa fa-check-circle'></i>
            </div>
            <div className={styles.option}>
              <i className='fa fa-smile-o'></i>
              <h5>Becoming a published author</h5>
              <i className='ml-auto fa fa-check-circle'></i>
            </div>
            <div className={styles.option}>
              <i className='fa fa-dollar'></i>
              <h5>Get paid to write</h5>
              <i className='ml-auto fa fa-check-circle'></i>
            </div>
          </div>
        </div>
        <Link href='/register'>
          <a className='mt-4 btn btn-primary'>Start Your Book Now</a>
        </Link>
      </div>
    </Fragment>
  );
};

export default TheGuide;

/*
<h4>
  have thoughts of great stories filled with imagination. So why is it
  only <span>97% of writers never complete</span> thier novel?
</h4>;

  <span>80% of people</span> seriously try writing as a career
*/
