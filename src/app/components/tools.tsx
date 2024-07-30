import { IconBrandNextjs, IconTools } from '@tabler/icons-react';

import { FC } from 'react';

import eslint from '../../../public/eslint.png';
import git from '../../../public/git.png';
import javascript from '../../../public/javascript.png';
import linux from '../../../public/linux.png';
import mongodb from '../../../public/mongodb.png';
import nestjs from '../../../public/nestjs.svg';
import postgres from '../../../public/postgres.png';
import prettier from '../../../public/prettier.png';
import reactjs from '../../../public/reactjs.webp';
import rust from '../../../public/rust.png';
import sass from '../../../public/sass.png';
import tailwindcss from '../../../public/tailwindcss.png';
import typescript from '../../../public/typescript.png';
import vscode from '../../../public/vscode.png';
import Tool from './components/tool';

const Tools: FC = () => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <IconTools className="text-text" />
          <p className="text-text text-paragraph-sm font-bold uppercase">
            Tools and technologies in my arsenal
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-text text-paragraph-xs font-medium uppercase">
          Programming Languages
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 items-start gap-4">
          <Tool name="JavaScript" icon={javascript} />
          <Tool name="TypeScript" icon={typescript} />
          <Tool name="Rust" icon={rust} />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-text text-paragraph-xs font-medium uppercase">
          Libraries & Frameworks
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 items-start gap-4">
          <Tool name="React.js" icon={reactjs} />
          <Tool name="Next.js" icon={<IconBrandNextjs />} />
          <Tool name="Tailwind CSS" icon={tailwindcss} />
          <Tool name="SASS/SCSS" icon={sass} />
          <Tool name="Nest.js" icon={nestjs} />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-text text-paragraph-xs font-medium uppercase">
          Databases & Other Tools
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 items-start gap-4">
          <Tool name="MongoDB" icon={mongodb} />
          <Tool name="PostgreSQL" icon={postgres} />
          <Tool name="Git" icon={git} />
          <Tool name="VSCode" icon={vscode} />
          <Tool name="ESLint" icon={eslint} />
          <Tool name="Prettier" icon={prettier} />
          <Tool name="Linux" icon={linux} />
        </div>
      </div>
    </div>
  );
};

export default Tools;
