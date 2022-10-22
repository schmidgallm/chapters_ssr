import React from 'react';
import Link from 'next/link';

import styles from '../../../../styles/CTA.module.css';

const CTA = () => {
  return (
    <div className={`section section-dark ${styles.skew}`}>
      <h2>
        We want to bring <span>Your Stories to Life.</span> Are you in?
      </h2>
      <Link href='/register'>
        <a className='mt-4 btn btn-primary'>Become an Author Today</a>
      </Link>
    </div>
  );
};

export default CTA;
