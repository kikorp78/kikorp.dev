'use client';

import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Variants, motion } from 'framer-motion';

import Project from './(components)/project';

const container: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.5
    }
  },
  hidden: {
    transition: {
      staggerChildren: 0.5
    }
  }
};

const item: Variants = {
  visible: {
    opacity: 1,
    transition: { duration: 0.75, ease: 'backOut' }
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.75, ease: 'backOut' }
  }
};

const Projects = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon
          className="text-opacity-80 text-neutral-300"
          icon={faLightbulb}
        />
        <p className="text-neutral-300 text-paragraph-sm font-bold uppercase">
          My current projects and prior experience
        </p>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="flex flex-col lg:flex-row items-start lg:space-x-5 space-y-5 lg:space-y-0"
      >
        <Project
          variants={item}
          name="Ivycord.js"
          description="A powerful library for interacting with the Discord API, written in TypeScript."
          iconURL="/ivycordjs.jpg"
          role="Lead Maintainer"
          type="Library"
          openSource
          githubURL="https://github.com/ivycord-js/ivycord.js"
          startTime="Early 2024"
          endTime="Now"
        />
        <Project
          variants={item}
          name="Marvo"
          description="A complete multi-purpose Discord bot with a broad range of interactive features."
          iconURL="/marvo.jpg"
          role="Co-Founder & Lead Developer"
          type="SaaS"
          websiteURL="https://marvo.gg"
          startTime="Early 2022"
          endTime="Now"
        />
        <Project
          variants={item}
          name="Spoke Discord Server"
          description="A Discord server based in the Balkan Region with over 1,000 members and a unique bot with exceptional features."
          iconURL="/spoke.webp"
          role="Co-Owner & Lead Developer"
          type="Discord Server"
          startTime="Late 2020"
          endTime="Late 2022"
        />
      </motion.div>
    </div>
  );
};

export default Projects;
