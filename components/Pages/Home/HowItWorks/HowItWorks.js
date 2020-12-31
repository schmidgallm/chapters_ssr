import React from 'react';

import styles from '../../../../styles/HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <div className='section'>
      <h2>
        <span>You control the story.</span> Community driven novels.
      </h2>
      <p className={`mt-4 ${styles.paragraph}`}>
        3 step process to bring your ideas to life. Have an idea on how the next
        chapter should happen? Just submit your idea and best idea is voted.
      </p>

      <div className={styles.steps}>
        <div className={styles.step}>
          <span>Step 1</span>
          <i className='fa fa-lightbulb-o'></i>
          <h4>Story Creation</h4>
          <p>
            Create a prompt for the creation of the story or vote on your
            favorite submitted prompt. This will be what the entire story plot
            will be generated from.
          </p>
        </div>
        <div className={styles.step}>
          <span>Step 2</span>
          <i className='fa fa-paragraph'></i>
          <h4>Chapter Submissions</h4>
          <p>
            We guide you on the basic plot points for each of the 10 chapters to
            help you with focusing on the creative. Submit what you think should
            happen then vote on best one.
          </p>
        </div>
        <div className={styles.step}>
          <span>Step 3</span>
          <i className='fa fa-edit'></i>
          <h4>Editing & Publishing</h4>
          <p>
            After all chapters are submitted, the story gets edited and
            published. Authors of chosen prompt and each chapter are marked as
            co-authors.
          </p>
        </div>
      </div>
      <button className='btn btn-primary'>Start Writing and Get Paid</button>
    </div>
  );
};

export default HowItWorks;
