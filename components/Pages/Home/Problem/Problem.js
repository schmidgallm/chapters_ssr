// Dependencies
import React, { useState, Fragment } from 'react';

// CSS
import styles from '../../../../styles/Problem.module.css';

const Problem = () => {
  // init state
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('');
  const [toggle, setToggle] = useState(false);

  // on Submit
  const onSubmit = e => {
    e.preventDefault();
    switch (count) {
      case 0:
        setMsg('Sounds like you are a pro already!');
        break;
      case 1:
        setMsg('Aewsome! We would be perfect to keep your skills up to par');
        break;
      case 2:
        setMsg(
          'You are definitly a good writer but I bet we can help even more'
        );
        break;
      case 3:
        setMsg('On your way! But we think we can give you that extra push');
        break;
      case 4:
        setMsg('Yes! Chapter Box is a great fit for you!');
        break;
      case 5:
        setMsg('Yes! Chapter Box is a great fit for you!');
        break;
      default:
        setMsg('Yes! Chapter Box is a great fit for you!');
    }
    setToggle(true);
  };

  // change style
  const changeStyle = id => {
    const elem = document.querySelector(`#${id}`);
    console.log(elem);
    elem.classList.add('checkActive');
    setCount(count + 1);
  };
  return (
    <div className='section'>
      <h2 className={styles.problemHeader}>
        How Chapter Box can <span>help you</span>
      </h2>
      <div className={styles.problemSubSection}>
        <div>
          <ul>
            <li>
              <h3>
                We all have thoughts of great stories filled with imagination.
                So why is it only <span>97% of writers never complete</span>{' '}
                thier novel?
              </h3>
            </li>
            <li>
              <h3>
                <span>80% of people</span> seriously try writing as a career
              </h3>
            </li>
          </ul>
        </div>
        <form className={styles.form} onSubmit={onSubmit}>
          <p>Is Chapter Box good a good fit for you?</p>
          <div className={styles.option} onClick={() => changeStyle('a')}>
            <i className='fa fa-lightbulb-o'></i>
            <h5>Have great story ideas</h5>
            <i id='a' className='ml-auto fa fa-check-circle check'></i>
          </div>
          <div className={styles.option} onClick={() => changeStyle('b')}>
            <i className='fa fa-book'></i>
            <h5>Never written full novel</h5>
            <i id='b' className='ml-auto fa fa-check-circle check'></i>
          </div>
          <div className={styles.option} onClick={() => changeStyle('c')}>
            <i className='fa fa-dollar'></i>
            <h5>Want to get piad for writing</h5>
            <i id='c' className='ml-auto fa fa-check-circle check'></i>
          </div>
          <div className={styles.option} onClick={() => changeStyle('d')}>
            <i className='fa fa-pencil'></i>
            <h5>Want to become an author</h5>
            <i id='d' className='ml-auto fa fa-check-circle check'></i>
          </div>
          <div className={styles.option} onClick={() => changeStyle('e')}>
            <i className='fa fa-frown-o'></i>
            <h5>Tired of stories with bad ending</h5>
            <i id='e' className='ml-auto fa fa-check-circle check'></i>
          </div>
          {!toggle ? (
            <button type='submit' className='btn btn-secondary'>
              Calculate
            </button>
          ) : null}
        </form>
      </div>
      {toggle ? (
        <Fragment>
          <div className='message'>
            <h2>{msg}</h2>
          </div>
          <button className='mt-3 btn btn-primary'>Join Free Now</button>
        </Fragment>
      ) : null}
    </div>
  );
};

export default Problem;
