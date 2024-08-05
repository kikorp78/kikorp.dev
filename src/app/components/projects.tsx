import { IconBulb } from '@tabler/icons-react';

import { FC } from 'react';

import ProjectContainer from './components/project-container';

const Projects: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <IconBulb className="text-foreground" />
        <p className="text-paragraph-sm font-bold uppercase text-foreground">
          Projects and prior experience
        </p>
      </div>
      <ProjectContainer />
    </div>
  );
};

export default Projects;
