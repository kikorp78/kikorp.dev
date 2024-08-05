import { IconArrowDown } from '@tabler/icons-react';

import { FC } from 'react';

const Hero: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-16 py-10 md:space-y-24 md:py-[120px]">
      <div className="flex flex-col items-center space-y-3">
        <h1 className="text-center text-mobile-h3 font-bold sm:text-mobile-h2 md:text-desktop-h1">
          Hey, I&apos;m Vuk — A{' '}
          <span className="landing-container-animation landing-container-animation-first border-b-4 border-primary">
            software engineer
          </span>
        </h1>
        <h1 className="text-center text-mobile-h3 font-bold sm:text-mobile-h2 md:text-desktop-h1">
          based in{' '}
          <span className="landing-container-animation landing-container-animation-second border-b-4 border-warning">
            Belgrade, Serbia
          </span>
        </h1>
      </div>
      <IconArrowDown className="animate-bounce" />
    </div>
  );
};

export default Hero;
