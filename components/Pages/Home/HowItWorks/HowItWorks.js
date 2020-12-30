import React from 'react';

import styles from '../../../../styles/HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <div className='section'>
      <h2>
        <span>Create</span> or vote on the best stories
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non
        totam, omnis eos harum minus neque explicabo libero porro molestias.
      </p>
      <div className={styles.steps}>
        <div className={styles.step}>
          <i className='fa fa-lightbulb-o'></i>
          <h4>Story Creation</h4>
          <p>
            Create a prompt for the creation of the story or vote on your
            favorite submitted prompt. This will be what the entire story plot
            will be generated from.
          </p>
        </div>
        <div className={styles.step}>
          <i className='fa fa-paragraph'></i>
          <h4>Chapter Submissions</h4>
          <p>
            Total of 10 chapters. Each chapter remains live for limited time.
            Submit what you think should happen then vote on best one. Don't
            worry about perfection as we hire the best editors.
          </p>
        </div>
        <div className={styles.step}>
          <i className='fa fa-edit'></i>
          <h4>Editing & Publishing</h4>
          <p>
            After all chapters are submitted, the story gets edited and
            published. Authors of chosen prompt and each chapter are marked as
            co-authors.
          </p>
        </div>
      </div>
      <button className='btn btn-primary'>See More</button>
    </div>
  );
};

export default HowItWorks;
