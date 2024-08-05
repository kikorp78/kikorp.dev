'use client';

import clsx from 'clsx';
import { Variants, motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

import { ProjectColor } from '../project';

const projectAnimation: Variants = {
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'backOut' }
  },
  hidden: {
    opacity: 0
  }
};

interface Props {
  color: ProjectColor;
}

const ProjectWrapper: FC<PropsWithChildren<Props>> = ({ children, color }) => {
  const getColor = () => {
    switch (color) {
      case 'marvo':
        return 'hover:bg-projects-marvo/10 hover:border-projects-marvo';
      case 'spoke':
        return 'hover:bg-projects-spoke/10 hover:border-projects-spoke';
    }
  };

  return (
    <motion.div
      variants={projectAnimation}
      className={clsx(
        'flex h-full select-none flex-col items-start space-y-3 rounded-lg border border-border p-4 transition xl:flex-row xl:space-x-[10px] xl:space-y-0',
        getColor()
      )}
    >
      {children}
    </motion.div>
  );
};

export default ProjectWrapper;
