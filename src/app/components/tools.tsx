import { IconBrandNextjs, IconTools } from '@tabler/icons-react';

import { FC } from 'react';

import cpp from '../../../public/cpp.png';
import csharp from '../../../public/csharp.png';
import eslint from '../../../public/eslint.png';
import git from '../../../public/git.png';
import htmlcss from '../../../public/htmlcss.png';
import java from '../../../public/java.webp';
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
import Tool from './components/tool';

const Tools: FC = () => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <IconTools className="text-foreground" />
          <p className="text-paragraph-sm font-bold uppercase text-foreground">
            Tools and technologies in my arsenal
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-paragraph-xs font-medium uppercase text-foreground">
          Languages
        </p>
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <Tool name="HTML/CSS" icon={htmlcss} />
          <Tool name="JavaScript" icon={javascript} />
          <Tool name="TypeScript" icon={typescript} />
          <Tool name="Rust" icon={rust} />
          <Tool name="Java" icon={java} />
          <Tool name="C#" icon={csharp} />
          <Tool name="C++" icon={cpp} />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-paragraph-xs font-medium uppercase text-foreground">
          Libraries & Frameworks
        </p>
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <Tool name="React.js" icon={reactjs} />
          <Tool name="Next.js" icon={<IconBrandNextjs />} />
          <Tool name="Nest.js" icon={nestjs} />
          <Tool name="SASS/SCSS" icon={sass} />
          <Tool name="Tailwind CSS" icon={tailwindcss} />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-paragraph-xs font-medium uppercase text-foreground">
          Databases & Other Tools
        </p>
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <Tool name="MongoDB" icon={mongodb} description="Database" />
          <Tool name="PostgreSQL" icon={postgres} description="Database" />
          <Tool name="Git" icon={git} description="Source Control" />
          <Tool name="ESLint" icon={eslint} description="Linter" />
          <Tool name="Prettier" icon={prettier} description="Formatter" />
          <Tool name="Linux" icon={linux} description="Operating System" />
        </div>
      </div>
    </div>
  );
};

export default Tools;
