// Dependencies
import React from 'react';

// Componentns
import NextHead from '../NextHead';
import Navbar from '../Navbar';
import Footer from '../Footer';

// CSS
import styles from '../../../styles/Wrapper.module.css';

const Wrapper = props => {
  return (
    <div className={styles.layoutWrapper}>
      <NextHead title={props.title} />
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Wrapper;
