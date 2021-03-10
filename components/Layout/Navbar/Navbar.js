import React from 'react';
import Link from 'next/link';

import styles from '../../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${styles.navbarBackground}`}
    >
      <div className='container'>
        <a className={styles.navbarBrand} href='#'>
          <img
            src='/static/logo.svg'
            width='270'
            height='90'
            alt=''
            loading='lazy'
          />
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link href='/descripton'>
                <a className='nav-link'>Why Chapter Box?</a>
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Services
              </a>
              <div
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <a className='dropdown-item' href='#'>
                  Planning
                </a>
                <a className='dropdown-item' href='#'>
                  Writing
                </a>
                <a className='dropdown-item' href='#'>
                  Editing
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='#'>
                  Publishing
                </a>
              </div>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Resources
              </a>
              <div
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <a className='dropdown-item' href='#'>
                  Prompts
                </a>
                <a className='dropdown-item' href='#'>
                  Blogs
                </a>
                <a className='dropdown-item' href='#'>
                  Newsletters
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='#'>
                  FAQ
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <Link href='/login'>
                <a className='btn btn-secondary' href='#'>
                  Login
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
