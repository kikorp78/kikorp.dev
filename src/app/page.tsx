import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';

import { FC } from 'react';

import Contact from './components/contact';
import Hero from './components/hero';
import LandingContainer from './components/landing-container';
import Projects from './components/projects';
import Repositories from './components/repositories';
import Tools from './components/tools';

const Home: FC = () => {
  return (
    <div className="w-full max-w-[1400px] h-full px-8">
      <Navbar />
      <div className="flex flex-col space-y-24">
        <LandingContainer>
          <Hero />
          <Projects />
        </LandingContainer>
        <Repositories />
        <Tools />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
