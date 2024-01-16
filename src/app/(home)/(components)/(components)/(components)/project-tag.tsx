import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';

interface Props {
  content: string;
  icon: IconDefinition;
  url?: string;
}

const ProjectTag = ({ content, icon, url }: Props) => {
  return (
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon
        className="text-opacity-80 text-neutral-300"
        icon={icon}
      />
      {url ? (
        <div className="group flex items-center space-x-2">
          <Link
            className="text-opacity-80 group-hover:text-opacity-100 text-neutral-300 text-paragraph-xs font-medium transition"
            href={url}
            target="_blank"
            rel="noopener,noreferrer"
          >
            {content}
          </Link>
          <FontAwesomeIcon
            className="text-opacity-80 group-hover:text-opacity-100 text-neutral-300 transition"
            icon={faArrowUpRightFromSquare}
            size="xs"
          />
        </div>
      ) : (
        <p className="text-opacity-80 text-neutral-300 text-paragraph-xs font-medium">
          {content}
        </p>
      )}
    </div>
  );
};

export default ProjectTag;
