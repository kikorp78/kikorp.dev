import { faGem } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Tool from './(components)/tool';

const Tools = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon
          className="text-opacity-80 text-neutral-300"
          icon={faGem}
        />
        <p className="text-neutral-300 text-paragraph-sm font-bold uppercase">
          All the tools and technologies in my arsenal
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start gap-5">
        <Tool
          name="TypeScript"
          description="A programming language developed and maintained by Microsoft. It is a strict superset of JavaScript, adding static typing to the language and ensuring a robust and easily maintainable codebase."
          iconURL="/typescript.png"
          tags={['Programming Language', 'JavaScript Superset']}
        />
        <Tool
          name="React.js"
          description="A front-end library created by Facebook (Meta) in order to simplify the process of building interactive user interfaces."
          iconURL="/reactjs.webp"
          tags={['Front-end Library', 'UI Library']}
        />
        <Tool
          name="Next.js"
          description="A React.js framework that allows developers to build full-stack server-side rendered and SEO optimized websites with ease."
          iconURL="/nextjs.svg"
          tags={['Web Framework', 'React.js Framework']}
        />
        <Tool
          name="Tailwind CSS"
          description="A utility-first CSS framework that allows front-end developers to rapidly build websites with modern user interfaces."
          iconURL="/tailwindcss.png"
          tags={['CSS Framework', 'Utility-First CSS Framework']}
        />
        <Tool
          name="Nest.js"
          description="A progressive back-end framework for building efficient and scalable Node.js server-side applications."
          iconURL="/nestjs.svg"
          tags={['Back-end Framework', 'Node.js Framework', 'TypeScript-based']}
        />
        <Tool
          name="Git"
          description="A version control and source code management system designed to handle every project with speed and efficiency."
          iconURL="/git.png"
          tags={[
            'Version Control',
            'Source Code Management',
            'CI/CD',
            'Quick Deployment'
          ]}
        />
        <Tool
          name="ESLint"
          description="A configurable linter tool for identifying and reporting code problems in JavaScript and TypeScript."
          iconURL="/eslint.png"
          tags={['Linting Tool', 'Code Quality Tool']}
        />
        <Tool
          name="Prettier"
          description="An opinionated code formatter that enforces a consistent code style across an entire codebase."
          iconURL="/prettier.png"
          tags={['Code Formatter', 'Code Quality Tool']}
        />
        <Tool
          name="Linux"
          description="An operating system used to power ~96.3% of the world's top servers. With it's flexibility and speed, it is the perfect choice for any production-ready application."
          iconURL="/linux.png"
          tags={['Operating System', 'Server OS', 'System Administration']}
        />
      </div>
    </div>
  );
};

export default Tools;
