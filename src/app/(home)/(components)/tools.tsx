import { IconTools } from '@tabler/icons-react';

import { FC } from 'react';

import Tool from './(components)/tool';

const Tools: FC = () => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex items-center space-x-2">
        <IconTools className="text-text" />
        <p className="text-text text-paragraph-sm font-bold uppercase">
          Tools and technologies in my arsenal
        </p>
      </div>
      <div className="flex flex-col space-y-5">
        <p className="text-text text-paragraph-xs font-medium uppercase">
          Programming Languages
        </p>
        <hr className="w-full h-[1px] bg-border border-none" />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5">
          <Tool
            name="JavaScript"
            description="Interpreted Language"
            iconURL="/javascript.png"
          />
          <Tool
            name="TypeScript"
            description="JavaScript Superset"
            iconURL="/typescript.png"
          />
          <Tool
            name="Rust"
            description="General-purpose Language"
            iconURL="/rust.png"
          />
        </div>
        <p className="text-text text-paragraph-xs">
          Also familiar with C++, C#, and Java.
        </p>
      </div>
      <div className="flex flex-col space-y-5">
        <p className="text-text text-paragraph-xs font-medium uppercase">
          Libraries & Frameworks
        </p>
        <hr className="w-full h-[1px] bg-border border-none" />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5">
          <Tool
            name="React.js"
            description="Front-end UI Library"
            iconURL="/reactjs.webp"
          />
          <Tool
            name="Next.js"
            description="React.js Framework"
            iconURL="/nextjs.svg"
          />
          <Tool
            name="Tailwind CSS"
            description="CSS Framework"
            iconURL="/tailwindcss.png"
          />
          <Tool
            name="SASS/SCSS"
            description="CSS Preprocessor"
            iconURL="/sass.png"
          />
          <Tool
            name="Nest.js"
            description="Node.js Web Framework"
            iconURL="/nestjs.svg"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-5">
        <p className="text-text text-paragraph-xs font-medium uppercase">
          Databases & Other Tools
        </p>
        <hr className="w-full h-[1px] bg-border border-none" />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5">
          <Tool
            name="MongoDB"
            description="NoSQL Database"
            iconURL="/mongodb.png"
          />
          <Tool
            name="PostgreSQL"
            description="Relational Database"
            iconURL="/postgres.png"
          />
          <Tool
            name="Git"
            description="Version Control System"
            iconURL="/git.png"
          />
          <Tool name="VSCode" description="Code Editor" iconURL="/vscode.png" />
          <Tool
            name="ESLint"
            description="Linting Tool"
            iconURL="/eslint.png"
          />
          <Tool
            name="Prettier"
            description="Code Formatter"
            iconURL="/prettier.png"
          />
          <Tool
            name="Linux"
            description="Operating System"
            iconURL="/linux.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;
