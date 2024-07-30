'use client';

import Constants from '@/utils/constants';
import { IconBrandDiscord, IconBrandGithub } from '@tabler/icons-react';

import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import avatar from '../../../public/avatar.gif';
import ThemeSwitch from './components/ThemeSwitch';

const container: Variants = {
  visible: {
    translateY: 0,
    transition: { duration: 0.5, ease: 'backOut' }
  },
  hidden: {
    translateY: '-100px'
  }
};

const Navbar: FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="flex justify-between items-center py-8 md:py-10"
    >
      <Image
        className="w-12 rounded-full"
        src={avatar}
        sizes="48px"
        alt="official avatar"
        priority
      />
      <div className="flex items-center space-x-2">
        <Link
          className="w-9 h-9 hover:bg-border flex justify-center items-center rounded-md transition"
          href={Constants.GITHUB_URL}
          target="_blank"
          rel="noopener,noreferrer"
        >
          <IconBrandGithub />
        </Link>
        <Link
          className="w-9 h-9 hover:bg-border flex justify-center items-center rounded-md transition"
          href={Constants.DISCORD_URL}
          target="_blank"
          rel="noopener,noreferrer"
        >
          <IconBrandDiscord />
        </Link>
        <ThemeSwitch />
      </div>
    </motion.div>
  );
};

export default Navbar;
