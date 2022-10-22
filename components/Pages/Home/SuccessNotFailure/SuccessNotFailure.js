import React from 'react';

import styles from '../../../../styles/SuccessNotFailure.module.css';

const SuccessNotFailure = () => {
  return (
    <div className={styles.comparison}>
      <div className={styles.comparisonSection}>
        <h2>
          <span>Before</span> Chapter Box
        </h2>
        <ul>
          <li>
            <i className='fa fa-check'></i>Tons of Ideas on a notepad
          </li>
          <li>
            <i className='fa fa-check'></i>Binge netflix every night
          </li>
          <li>
            <i className='fa fa-times'></i>Write first chapter
          </li>
          <li>
            <i className='fa fa-times'></i>Published Author
          </li>
        </ul>
      </div>
      <div className={styles.comparisonSection}>
        <h2>
          <span>After</span> Chapter Box
        </h2>
        <ul>
          <li>
            <i className='fa fa-check'></i>Your Book Outine is Created
          </li>
          <li>
            <i className='fa fa-check'></i>Chapters Written
          </li>
          <li>
            <i className='fa fa-check'></i>Your Books is Published
          </li>
          <li>
            <i className='fa fa-check'></i>You get paid for your writing
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SuccessNotFailure;
