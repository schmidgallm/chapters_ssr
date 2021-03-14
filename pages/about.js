import React from 'react';

// Components
import Wrapper from '../components/Layout/Wrapper';
import AboutHeader from '../components/Pages/About/AboutHeader';
import AboutSubHeader from '../components/Pages/About/AboutSubHeader';
import AboutModel from '../components/Pages/About/AboutModel';

// CSS
import styles from '../styles/about.module.css';

const about = () => {
  return (
    <Wrapper title='Chapter Box | About Us'>
      <div className={styles.about}>
        <AboutHeader />
        <AboutSubHeader />
        <AboutModel />
      </div>
    </Wrapper>
  );
};
export default about;
