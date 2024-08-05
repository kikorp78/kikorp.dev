'use client';

import { Variants, motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

const landingContainerAnimation: Variants = {
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5, ease: 'backOut' }
  },
  hidden: {
    opacity: 0
  }
};

const LandingContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={landingContainerAnimation}
      className="flex flex-col space-y-16"
    >
      {children}
    </motion.div>
  );
};

export default LandingContainer;
