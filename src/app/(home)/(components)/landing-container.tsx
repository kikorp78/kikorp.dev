'use client';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LandingContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 md:py-[120px] space-y-16 md:space-y-32">
      <div className="flex flex-col items-center space-y-3">
        <h1 className="text-mobile-h3 sm:text-mobile-h2 md:text-desktop-h1 font-bold text-center">
          Hey, I&apos;m Vuk — A{' '}
          <span className="landing-container-animation landing-container-animation-first border-b-4 border-primary">
            full-stack developer
          </span>
        </h1>
        <h1 className="text-mobile-h3 sm:text-mobile-h2 md:text-desktop-h1 font-bold text-center">
          based in{' '}
          <span className="landing-container-animation landing-container-animation-second border-b-4 border-warning">
            Frankfurt, Germany
          </span>
        </h1>
      </div>
      <FontAwesomeIcon
        className="animate-bounce"
        icon={faArrowDown}
        size="lg"
      />
    </div>
  );
};

export default LandingContainer;
