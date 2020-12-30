// Dependencies
import React from 'react';

// Components
import Wrapper from '../components/Layout/Wrapper';
import Header from '../components/Pages/Home/Header';
import HowItWorks from '../components/Pages/Home/HowItWorks';
import Mission from '../components/Pages/Home/Mission';

export default function Home() {
  return (
    <Wrapper>
      <main>
        <Header />
        <HowItWorks />
        <Mission />
      </main>
    </Wrapper>
  );
}
