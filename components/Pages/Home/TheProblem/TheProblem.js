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
            Villian: Stop fearing the blank page and how to actually write and
            plan a book. You have a great idea so let us handle the heavy
            lifting. You just worry about your story.
          </p>
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
            Philosophical: Everyone has a great story. Soon someone thousands of
            miles will be curling up turning each page of your story with eager
            anticipation.
          </p>

          <Link href='/virtualtour'>
            <a className='btn btn-primary'>Begin Your Book Now</a>
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
*/
