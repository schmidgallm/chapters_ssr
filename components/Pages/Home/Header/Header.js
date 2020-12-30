// Dependencies
import React from 'react';

// CSS
import styles from '../../../../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.copy}>
        <h1>
          Everyone has an <span>Idea</span>. Anyone can become an{' '}
          <span>Author</span>
        </h1>
        <form>
          <input
            type='email'
            class='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter your email address'
          />
          <button className='btn btn-primary'>Join Free Now</button>
        </form>
      </div>
    </div>
  );
};

export default Header;