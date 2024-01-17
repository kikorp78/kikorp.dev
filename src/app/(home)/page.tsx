import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';

import LandingContainer from './(components)/landing-container';
import Projects from './(components)/projects';
import Tools from './(components)/tools';

const Home = () => {
  return (
    <div className="w-full h-full px-8 md:px-[120px]">
      <Navbar />
      <div className="flex flex-col space-y-10">
        <LandingContainer />
        <Projects />
        <Tools />
        {/* <hr className="w-full h-[1px] bg-neutral-100 border-none rounded-full" /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
