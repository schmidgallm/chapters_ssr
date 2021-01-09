import React from 'react';
import Link from 'next/link';

import styles from '../../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav id='navbar' className={`navbar ${styles.navbarBackground}`}>
      <Link href='/'>
        <a className='navbar-brand ml-auto'>Chapter Box</a>
      </Link>
      <Link href='/'>
        <a className='ml-auto btn btn-secondary' href='#'>
          Sign In
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
