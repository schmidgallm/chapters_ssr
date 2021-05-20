import React from 'react';

import styles from '../../../../styles/SuccessNotFailure.module.css';

const SuccessNotFailure = () => {
  return (
    <div className={styles.comparison}>
      <div className={styles.comparisonSection}>
        <h2>2020</h2>
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
        <h2>2021</h2>
        <ul>
          <li>
            <i className='fa fa-check'></i>Book created on my ideas
          </li>
          <li>
            <i className='fa fa-check'></i>Finished Chapter
          </li>
          <li>
            <i className='fa fa-check'></i>Name on front of book
          </li>
          <li>
            <i className='fa fa-check'></i>Getting paid writing
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SuccessNotFailure;
