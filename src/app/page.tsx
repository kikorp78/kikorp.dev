import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

import { FC } from 'react';

import Hero from './components/hero';
import LandingContainer from './components/landing-container';
import Projects from './components/projects';
import Repositories from './components/repositories';
import Tools from './components/tools';

const Home: FC = () => {
  return (
    <div className="size-full max-w-[1400px] px-8">
      <Navbar />
      <div className="flex flex-col space-y-24">
        <LandingContainer>
          <Hero />
          <Projects />
        </LandingContainer>
        <Repositories />
        <Tools />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
