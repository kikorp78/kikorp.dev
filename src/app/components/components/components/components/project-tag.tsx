import { IconExternalLink } from '@tabler/icons-react';

import Link from 'next/link';
import { FC, ReactElement, cloneElement } from 'react';

interface Props {
  content: string;
  icon: ReactElement;
  url?: string;
}

const ProjectTag: FC<Props> = ({ content, icon, url }) => {
  return (
    <div className="flex items-center space-x-[6px]">
      {cloneElement(icon, { className: 'text-foreground' })}
      {url ? (
        <div className="group flex items-center space-x-[6px]">
          <Link
            className="text-paragraph-xs font-medium text-foreground transition group-hover:text-foreground-hover"
            href={url}
            target="_blank"
            rel="noopener,noreferrer"
          >
            {content}
          </Link>
          <IconExternalLink
            className="text-foreground transition group-hover:text-foreground-hover"
            size={16}
          />
        </div>
      ) : (
        <p className="text-paragraph-xs font-medium text-foreground">
          {content}
        </p>
      )}
    </div>
  );
};

export default ProjectTag;
