// Dependencies
import React from 'react';
import Link from 'next/link';

import styles from '../../../../styles/TheProblem.module.css';

const TheProblem = () => {
  return (
    <div className='section'>
      <h2>
        <span>Writing is hard.</span> So we make it easy.
      </h2>
      <div className={styles.sectionFlex}>
        <div className={styles.sectionImage}></div>
        <div className={styles.sectionCopy}>
          <h4>
            Turn your idea into a <span>fully published book.</span>
          </h4>
          <hr className={styles.problemHr} />
          <p>
            Whether you want to write a book, but you are not sure about how to
            start or have great stories to tell, but the words fall short when
            written down, our program will help you achieve your goals.
          </p>
          <p className={styles.bold}>
            At Chapter Box, we help with the heavy lifting with an easy-to-use
            methodology to write, develop, and publish a book
          </p>
          <ul>
            <li>
              <i className='fa fa-check'></i>
              Easy step-by-step process
            </li>
            <li>
              <i className='fa fa-check'></i>
              Pre done chapter outline to follow
            </li>
            <li>
              <i className='fa fa-check'></i>
              Published book in less then 90 days
            </li>
            <li>
              <i className='fa fa-check'></i>
              Take back your future and wealth
            </li>
          </ul>
          <p className={styles.bold}>
            Starting a book doesn't have to be scary. Lets make your dreams come
            true!
          </p>
          <Link href='/virtualtour'>
            <a className='btn btn-primary'>START YOUR BOOK NOW</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TheProblem;

/*
  <h2>
            Turn your great story ideas into a{' '}
            <span>professionally published book.</span>
          </h2>

          Stop fearing the blank page and unneeded frustrations of
            writing. You have these great story ideas but are getting frustrated
            how to actually write it. We totally get it and that is why we
            created a super easy to follow process and so you can make your
            story become reality in no time.

             <p>
            External: Writing is hard but it can be so much easier with step by
            step processes and templates for you to follow. Its almost plug and
            play.
          </p>
          <p>
            Internal: Watch your confidence grow as you follow the templates and
            amaze yourself as your story unfolds.
          </p>
          <p>
            Philosophical: Everyone has a great story so share yours! Just think
            of someone thousands of miles will be curling up turning each page
            of your story with eager anticipation.
          </p>
*/
