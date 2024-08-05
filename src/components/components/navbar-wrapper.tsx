'use client';

import { Variants, motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

const navbarAnimation: Variants = {
  visible: {
    translateY: 0,
    transition: { duration: 0.5, ease: 'backOut' }
  },
  hidden: {
    translateY: '-128px'
  }
};

const NavbarWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navbarAnimation}
      className="flex items-center justify-between py-8 md:py-10"
    >
      {children}
    </motion.div>
  );
};

export default NavbarWrapper;
