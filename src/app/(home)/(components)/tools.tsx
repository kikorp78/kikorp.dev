import { IconTools } from '@tabler/icons-react';

import { FC } from 'react';

import eslint from '../../../../public/eslint.png';
import git from '../../../../public/git.png';
import javascript from '../../../../public/javascript.png';
import linux from '../../../../public/linux.png';
import mongodb from '../../../../public/mongodb.png';
import nestjs from '../../../../public/nestjs.svg';
import nextjs from '../../../../public/nextjs.svg';
import postgres from '../../../../public/postgres.png';
import prettier from '../../../../public/prettier.png';
import reactjs from '../../../../public/reactjs.webp';
import rust from '../../../../public/rust.png';
import sass from '../../../../public/sass.png';
import tailwindcss from '../../../../public/tailwindcss.png';
import typescript from '../../../../public/typescript.png';
import vscode from '../../../../public/vscode.png';
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
            icon={javascript}
          />
          <Tool
            name="TypeScript"
            description="JavaScript Superset"
            icon={typescript}
          />
          <Tool
            name="Rust"
            description="General-purpose Language"
            icon={rust}
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
            icon={reactjs}
          />
          <Tool name="Next.js" description="React.js Framework" icon={nextjs} />
          <Tool
            name="Tailwind CSS"
            description="CSS Framework"
            icon={tailwindcss}
          />
          <Tool name="SASS/SCSS" description="CSS Preprocessor" icon={sass} />
          <Tool
            name="Nest.js"
            description="Node.js Web Framework"
            icon={nestjs}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-5">
        <p className="text-text text-paragraph-xs font-medium uppercase">
          Databases & Other Tools
        </p>
        <hr className="w-full h-[1px] bg-border border-none" />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5">
          <Tool name="MongoDB" description="NoSQL Database" icon={mongodb} />
          <Tool
            name="PostgreSQL"
            description="Relational Database"
            icon={postgres}
          />
          <Tool name="Git" description="Version Control System" icon={git} />
          <Tool name="VSCode" description="Code Editor" icon={vscode} />
          <Tool name="ESLint" description="Linting Tool" icon={eslint} />
          <Tool name="Prettier" description="Code Formatter" icon={prettier} />
          <Tool name="Linux" description="Operating System" icon={linux} />
        </div>
      </div>
    </div>
  );
};

export default Tools;
