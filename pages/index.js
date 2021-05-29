// Dependencies
import React from 'react';

// Components
import Wrapper from '../components/Layout/Wrapper';
import Header from '../components/Pages/Home/Header';
import SubHeader from '../components/Pages/Home/SubHeader';
import TheProblem from '../components/Pages/Home/TheProblem';
import TheGuide from '../components/Pages/Home/TheGuide';
import ThePlan from '../components/Pages/Home/ThePlan';
import CTA from '../components/Pages/Home/CTA';
import SuccessNotFailure from '../components/Pages/Home/SuccessNotFailure';

export default function Home() {
  return (
    <Wrapper title='Chapter Box | Everyone has a story'>
      <main>
        <Header />
        <SubHeader />
        <TheProblem />
        <TheGuide />
        <ThePlan />
        <SuccessNotFailure />
        <CTA />
      </main>
    </Wrapper>
  );
}
