import { FC } from 'react';

import marvo from '../../../../public/marvo.jpg';
import spoke from '../../../../public/spoke.webp';
import Project from './components/project';
import ProjectContainerWrapper from './components/project-container-wrapper';

const ProjectContainer: FC = () => {
  return (
    <ProjectContainerWrapper>
      <Project
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
        name="Spoke Discord Server"
        description="A Discord server known for pushing the boundaries in server innovation and engagement."
        icon={spoke}
        color="spoke"
        role="Co-Owner & Lead Developer"
        type="Discord Server"
        startTime="Late 2020"
        endTime="Late 2022"
      />
    </ProjectContainerWrapper>
  );
};

export default ProjectContainer;
