import React from 'react';

import styles from '../../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ${styles.navbarBackground}`}
    >
      <a className='navbar-brand ml-5' href='/'>
        Chapter Box
      </a>
      <button
        className={`navbar-toggler ${styles.navbarToggler}`}
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className={`navbar-toggler-icon ${styles.navbarToggler}`}></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto mr-5'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              How It Works
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Pricing
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Sign In
            </a>
          </li>
          <li className={`nav-item ${styles.navCTA}`}>
            <a className='nav-link' href='#'>
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
