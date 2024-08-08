import {
  IconBrandGithub,
  IconCalendar,
  IconCode,
  IconFlag,
  IconUser,
  IconWorld
} from '@tabler/icons-react';

import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import ProjectTag from './components/project-tag';
import ProjectWrapper from './components/project-wrapper';

export type ProjectColor = 'marvo' | 'spoke';

interface Props {
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
  return (
    <ProjectWrapper color={color}>
      <div className="flex items-start space-x-[10px]">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <Image
              className="w-6 rounded"
              src={icon}
              sizes="24px"
              alt="project image"
              priority
            />
            <p className="text-paragraph-md font-semibold">{name}</p>
          </div>
          <p className="text-paragraph-sm font-medium text-foreground">
            {description}
          </p>
        </div>
        <div className="flex shrink-0 items-center space-x-[6px]">
          <IconCalendar className="text-foreground" />
          <p className="text-paragraph-xs font-medium text-foreground">
            {startTime} &ndash; {endTime}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <ProjectTag content={role} icon={<IconUser />} />
        <ProjectTag content={type} icon={<IconFlag />} />
        <ProjectTag
          content={openSource ? 'Open Source' : 'Proprietary'}
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
    </ProjectWrapper>
  );
};

export default Project;
