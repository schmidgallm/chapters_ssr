// Dependencies
import React from 'react';

// Components
import Wrapper from '../components/Layout/Wrapper';
import Header from '../components/Pages/Home/Header';
import Problem from '../components/Pages/Home/Problem';
import HowItWorks from '../components/Pages/Home/HowItWorks';
import Mission from '../components/Pages/Home/Mission';

export default function Home() {
  return (
    <Wrapper>
      <main>
        <Header />
        <Problem />
        <Mission />
        <HowItWorks />
      </main>
    </Wrapper>
  );
}
