'use client';

import { Variants, motion } from 'framer-motion';
import { FC } from 'react';

import marvo from '../../../../public/marvo.jpg';
import spoke from '../../../../public/spoke.webp';
import Project from './project';

const container: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1
    }
  }
};

const item: Variants = {
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'backOut' }
  },
  hidden: {
    opacity: 0
  }
};

const ProjectContainer: FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="flex flex-col xl:flex-row items-start xl:space-x-4 space-y-4 xl:space-y-0"
    >
      {/* <Project
        variants={item}
        name="Ivycord.js"
        description="A powerful library for interacting with the Discord API, written in TypeScript."
        iconURL="/ivycordjs.jpg"
        color="ivycord"
        role="Lead Maintainer"
        type="Library"
        openSource
        githubURL="https://github.com/ivycord-js/ivycord.js"
        startTime="Early 2024"
        endTime="Now"
      /> */}
      <Project
        variants={item}
        name="Marvo"
        description="A complete multi-purpose Discord bot with a broad range of interactive features."
        icon={marvo}
        color="marvo"
        role="Co-Founder & Lead Developer"
        type="SaaS"
        websiteURL="https://marvo.gg"
        startTime="Early 2022"
        endTime="Now"
      />
      <Project
        variants={item}
        name="Spoke Discord Server"
        description="A Discord server known for pushing the boundaries in server innovation and engagement."
        icon={spoke}
        color="spoke"
        role="Co-Owner & Lead Developer"
        type="Discord Server"
        startTime="Late 2020"
        endTime="Late 2022"
      />
    </motion.div>
  );
};

export default ProjectContainer;
