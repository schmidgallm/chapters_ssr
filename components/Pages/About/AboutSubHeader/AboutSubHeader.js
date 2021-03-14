import React from 'react';
import Link from 'next/link';

import styles from '../../../../styles/AboutHeader.module.css';

const AboutSubHeader = () => {
  return (
    <div className='section'>
      <h1>
        <span>Writing is hard.</span> So we make it easy.
      </h1>
      <div className={styles.copy}>
        <p>
          You have the ideas, we have the words. From beginner to advanced,
          follow our super easy to follow process and your story can become
          reality in no time.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed debitis
          aut adipisci doloribus explicabo, expedita libero minima dolor
          aperiam, cumque voluptas commodi. Ipsa aperiam voluptatum aspernatur
          id omnis voluptates labore excepturi illum, ea blanditiis aut ad
          provident nisi, in a sint rerum porro laboriosam quia quis
          perspiciatis! Odit, cum incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore
          praesentium aperiam explicabo eveniet, rerum vero voluptatem nam ipsam
          iusto!
        </p>
        <br />
        <h4>So What Can we do for you?</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit earum
          tempora modi ipsa labore? Accusantium facere laudantium nulla delectus
          temporibus.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
          ad!
        </p>
        <div className={styles.services}>
          <Link href='/services'>
            <a className='btn btn-primary'>All Services</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSubHeader;
