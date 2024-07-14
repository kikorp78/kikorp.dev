import { IconTools } from '@tabler/icons-react';

import { FC } from 'react';

import Tool from './(components)/tool';

const Tools: FC = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center space-x-2">
        <IconTools className="text-text" />
        <p className="text-text text-paragraph-sm font-bold uppercase">
          Tools and technologies in my arsenal
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5">
        <Tool
          name="TypeScript"
          iconURL="/typescript.png"
          tags={['Programming Language', 'JavaScript Superset']}
        />
        <Tool
          name="React.js"
          iconURL="/reactjs.webp"
          tags={['Front-end Library', 'UI Library']}
        />
        <Tool
          name="Next.js"
          iconURL="/nextjs.svg"
          tags={['Web Framework', 'React.js Framework']}
        />
        <Tool
          name="Tailwind CSS"
          iconURL="/tailwindcss.png"
          tags={['CSS Framework', 'Utility-First CSS Framework']}
        />
        <Tool
          name="Nest.js"
          iconURL="/nestjs.svg"
          tags={['Back-end Framework', 'Node.js Framework', 'TypeScript-based']}
        />
        <Tool
          name="Git"
          iconURL="/git.png"
          tags={[
            'Version Control',
            'Source Code Management',
            'CI/CD',
            'Quick Deployment'
          ]}
        />
        <Tool
          name="VSCode"
          iconURL="/vscode.png"
          tags={['Code Editor', 'IDE']}
        />
        <Tool
          name="MongoDB"
          iconURL="/mongodb.png"
          tags={['Database', 'NoSQL', 'Document-Oriented']}
        />
        <Tool
          name="PostgreSQL"
          iconURL="/postgres.png"
          tags={['Database', 'SQL', 'Relational']}
        />
        <Tool
          name="ESLint"
          iconURL="/eslint.png"
          tags={['Linting Tool', 'Code Quality Tool']}
        />
        <Tool
          name="Prettier"
          iconURL="/prettier.png"
          tags={['Code Formatter', 'Code Quality Tool']}
        />
        <Tool
          name="Linux"
          iconURL="/linux.png"
          tags={['Operating System', 'Server OS', 'System Administration']}
        />
      </div>
    </div>
  );
};

export default Tools;
