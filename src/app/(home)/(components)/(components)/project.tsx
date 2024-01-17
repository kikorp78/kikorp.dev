'use client';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCalendar,
  faFlag,
  faUser
} from '@fortawesome/free-regular-svg-icons';
import { faCode, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import clsx from 'clsx';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';

import ProjectTag from './(components)/project-tag';

// Not a really good implementation of the idea, but it works for now.
type ProjectColor = 'ivycord' | 'marvo' | 'spoke';

interface Props {
  variants: Variants;
  name: string;
  description: string;
  iconURL: string;
  color: ProjectColor;
  role: string;
  type: string;
  openSource?: boolean;
  githubURL?: string;
  websiteURL?: string;
  startTime: string;
  endTime: string;
}

const Project = ({
  variants,
  name,
  description,
  iconURL,
  color,
  role,
  type,
  openSource,
  githubURL,
  websiteURL,
  startTime,
  endTime
}: Props) => {
  const getColor = () => {
    switch (color) {
      case 'ivycord':
        return 'hover:bg-projects-ivycord hover:border-projects-ivycord';
      case 'marvo':
        return 'hover:bg-projects-marvo hover:border-projects-marvo';
      case 'spoke':
        return 'hover:bg-projects-spoke hover:border-projects-spoke';
    }
  };

  return (
    <motion.div
      variants={variants}
      className={clsx(
        'w-full hover:bg-opacity-10 flex flex-col xl:flex-row items-start p-5 xl:space-x-[10px] space-y-3 xl:space-y-0 border border-neutral-100 rounded-lg transition select-none',
        getColor()
      )}
    >
      <div className="w-full flex flex-col space-y-3">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded"
            src={iconURL}
            width={24}
            height={24}
            alt="project image"
            priority
          />
          <p className="text-paragraph-md font-bold">{name}</p>
        </div>
        <p className="text-neutral-300 text-paragraph-sm font-medium">
          {description}
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <ProjectTag content={role} icon={faUser} />
          <ProjectTag content={type} icon={faFlag} />
          <ProjectTag
            content={openSource ? 'Open Source' : 'Source Not Available'}
            icon={faCode}
          />
          {githubURL && (
            <ProjectTag
              content="View on GitHub"
              icon={faGithub}
              url={githubURL}
            />
          )}
          {websiteURL && (
            <ProjectTag
              content="Visit Website"
              icon={faEarthAmerica}
              url={websiteURL}
            />
          )}
        </div>
      </div>
      <div className="flex flex-shrink-0 items-center space-x-2">
        <FontAwesomeIcon
          className="text-opacity-80 text-neutral-300"
          icon={faCalendar}
        />
        <p className="text-opacity-80 text-neutral-300 text-paragraph-xs font-medium">
          {startTime} &ndash; {endTime}
        </p>
      </div>
    </motion.div>
  );
};

export default Project;
