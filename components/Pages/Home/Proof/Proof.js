// Dependencies
import React from 'react';

// CSS
import styles from '../../../../styles/Proof.module.css';

const Proof = () => {
  return (
    <div className='section section-dark'>
      <div className={styles.proof}>
        <div className={styles.proofHeader}>
          <h2>
            Its like a "Choose your own adventure" but you get to create it!
          </h2>
          <hr />
          <ul>
            <li>Have a great story idea? Submit a prompt to be chosen</li>
            <li>
              Tired of a character? Write the next chapter and remove them.
            </li>
            <li>Have an idea for the ending? Submit your chapter!</li>
            <li></li>
          </ul>
          <button className='btn btn-secondary'>Join Now</button>
        </div>
        <div className={styles.proofImage}></div>
      </div>
    </div>
  );
};

export default Proof;
