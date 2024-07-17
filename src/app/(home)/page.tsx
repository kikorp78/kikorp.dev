import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';

import { FC } from 'react';

import Contact from './(components)/contact';
import LandingContainer from './(components)/landing-container';
import Projects from './(components)/projects';
import Repositories from './(components)/repositories';
import Tools from './(components)/tools';

const Home: FC = () => {
  return (
    <div className="w-full h-full px-8 md:px-[120px]">
      <Navbar />
      <div className="flex flex-col space-y-16">
        <LandingContainer />
        <Projects />
        <Repositories />
        <Tools />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
