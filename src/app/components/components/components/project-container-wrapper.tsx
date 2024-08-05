'use client';

import { Variants, motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

const projectContainerAnimation: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1
    }
  }
};

const ProjectContainerWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={projectContainerAnimation}
      className="flex flex-col items-start space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0"
    >
      {children}
    </motion.div>
  );
};

export default ProjectContainerWrapper;
