'use client';

import {
  IconBrandGithub,
  IconCalendar,
  IconCode,
  IconFlag,
  IconUser,
  IconWorld
} from '@tabler/icons-react';

import clsx from 'clsx';
import { Variants, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import ProjectTag from './(components)/project-tag';

type ProjectColor = 'marvo' | 'spoke';

interface Props {
  variants: Variants;
  name: string;
  description: string;
  icon: StaticImageData;
  color: ProjectColor;
  role: string;
  type: string;
  openSource?: boolean;
  githubURL?: string;
  websiteURL?: string;
  startTime: string;
  endTime: string;
}

const Project: FC<Props> = ({
  variants,
  name,
  description,
  icon,
  color,
  role,
  type,
  openSource,
  githubURL,
  websiteURL,
  startTime,
  endTime
}) => {
  const getColor = () => {
    switch (color) {
      case 'marvo':
        return 'hover:bg-projects-marvo hover:border-projects-marvo';
      case 'spoke':
        return 'hover:bg-projects-spoke hover:border-projects-spoke';
    }
  };

  return (
    <motion.div variants={variants} className="w-full">
      <div
        className={clsx(
          'hover:bg-opacity-10 flex flex-col xl:flex-row items-start p-5 xl:space-x-[10px] space-y-3 xl:space-y-0 border border-border rounded-lg select-none transition',
          getColor()
        )}
      >
        <div className="w-full flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <Image
              className="w-6 rounded"
              src={icon}
              sizes="24px"
              alt="project image"
              priority
            />
            <p className="text-paragraph-md font-bold">{name}</p>
          </div>
          <p className="text-text text-paragraph-sm font-medium">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <ProjectTag content={role} icon={<IconUser />} />
            <ProjectTag content={type} icon={<IconFlag />} />
            <ProjectTag
              content={openSource ? 'Open Source' : 'Source Not Available'}
              icon={<IconCode />}
            />
            {githubURL && (
              <ProjectTag
                content="View on GitHub"
                icon={<IconBrandGithub />}
                url={githubURL}
              />
            )}
            {websiteURL && (
              <ProjectTag
                content="Visit Website"
                icon={<IconWorld />}
                url={websiteURL}
              />
            )}
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center space-x-[6px]">
          <IconCalendar className="text-text" />
          <p className="text-text text-paragraph-xs font-medium">
            {startTime} &ndash; {endTime}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
