import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from 'next/image';

interface Props {
  name: string;
  description: string;
  iconURL: string;
  tags: string[];
}

const Tool = ({ name, description, iconURL, tags }: Props) => {
  return (
    <div className="hover:bg-opacity-50 hover:bg-neutral-100 flex flex-col p-5 space-y-3 border border-neutral-100 rounded-lg transition select-none">
      <div className="flex items-center space-x-2">
        <Image
          className="rounded"
          src={iconURL}
          width={24}
          height={24}
          alt="tool image"
          priority
        />
        <p className="text-paragraph-md font-bold">{name}</p>
      </div>
      <p className="text-neutral-300 text-paragraph-sm font-medium">
        {description}
      </p>
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon
          className="text-opacity-80 text-neutral-300"
          icon={faFlag}
        />
        <p className="text-opacity-80 text-neutral-300 text-paragraph-xs font-medium">
          {tags.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default Tool;
