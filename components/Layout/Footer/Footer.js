// Dependencies
import React, { Fragment } from 'react';

// CSS
import styles from '../../../styles/Footer.module.css';

const Footer = () => {
  return (
    <Fragment>
      <footer className={`section ${styles.footer} pb-2`}>
        <div className={styles.footerColumn}>
          <div className={styles.socialLinks}>
            <h3>Chapter Box</h3>
            <ul>
              <li>
                <i class='fa fa-facebook'></i>
              </li>
              <li>
                <i class='fa fa-twitter'></i>
              </li>
              <li>
                <i class='fa fa-linkedin'></i>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerColumn}>
          <h5>FAQ</h5>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h5>FAQ</h5>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h5>SUBSCRIBE</h5>
          <form>
            <div class='form-group'>
              <input
                type='email'
                class='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
            </div>

            <button type='submit' class='btn btn-secondary'>
              Submit
            </button>
          </form>
        </div>
      </footer>
      <div className={`section ${styles.companyInfo} py-3`}>
        <p>
          @2021 All rights reserved. <span>Chapters Publishing, LLC.</span>
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
