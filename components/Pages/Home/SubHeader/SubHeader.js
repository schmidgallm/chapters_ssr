// Dependencies
import React from 'react';

// CSS
import styles from '../../../../styles/SubHeader.module.css';

const SubHeader = () => {
  return (
    <div className='section section-alt'>
      <h2>
        We help <span>beginner authors...</span>
      </h2>
      <div className={styles.grid}>
        <div>
          <i className='fa fa-check-circle'></i>
          <h3>Write Your Book</h3>
        </div>
        <div>
          <i className='fa fa-check-circle'></i>
          <h3>Get Published</h3>
        </div>
        <div>
          <i className='fa fa-check-circle'></i>
          <h3>Live Your Dream</h3>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
