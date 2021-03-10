// Dependencies
import React from 'react';

// Components
import Wrapper from '../components/Layout/Wrapper';
import Header from '../components/Pages/Home/Header';
import Comparison from '../components/Pages/Home/Comparison';
import Problem from '../components/Pages/Home/Problem';
import HowItWorks from '../components/Pages/Home/HowItWorks';
import Proof from '../components/Pages/Home/Proof';
import CTA from '../components/Pages/Home/CTA';

export default function Home() {
  return (
    <Wrapper>
      <main>
        <Header />
        <HowItWorks />
        <Comparison />
        <Proof />
        <Problem />
        <CTA />
      </main>
    </Wrapper>
  );
}
