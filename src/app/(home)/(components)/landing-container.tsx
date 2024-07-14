import { IconArrowDown } from '@tabler/icons-react';

import { FC } from 'react';

const LandingContainer: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 md:py-[120px] space-y-16 md:space-y-24">
      <div className="flex flex-col items-center space-y-3">
        <h1 className="text-mobile-h3 sm:text-mobile-h2 md:text-desktop-h1 font-bold text-center">
          Hey, I&apos;m Vuk — A{' '}
          <span className="landing-container-animation landing-container-animation-first border-b-4 border-primary">
            software engineer
          </span>
        </h1>
        <h1 className="text-mobile-h3 sm:text-mobile-h2 md:text-desktop-h1 font-bold text-center">
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

export default LandingContainer;
