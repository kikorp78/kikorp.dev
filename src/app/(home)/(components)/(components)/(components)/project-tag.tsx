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
      {cloneElement(icon, { className: 'text-text' })}
      {url ? (
        <div className="group flex items-center space-x-[6px]">
          <Link
            className="text-text group-hover:text-text-hover text-paragraph-xs font-medium transition"
            href={url}
            target="_blank"
            rel="noopener,noreferrer"
          >
            {content}
          </Link>
          <IconExternalLink
            className="text-text group-hover:text-text-hover transition"
            size={16}
          />
        </div>
      ) : (
        <p className="text-text text-paragraph-xs font-medium">{content}</p>
      )}
    </div>
  );
};

export default ProjectTag;
