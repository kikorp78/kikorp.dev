'use client';

import { IconFlag } from '@tabler/icons-react';

import Image from 'next/image';
import { FC } from 'react';

interface Props {
  name: string;
  iconURL: string;
  tags: string[];
}

const Tool: FC<Props> = ({ name, iconURL, tags }) => {
  return (
    <div className="hover:bg-background-hover flex flex-col p-5 space-y-3 border border-border rounded-lg transition select-none">
      <div className="flex items-center space-x-2">
        <Image
          className="w-6 h-6 rounded"
          src={iconURL}
          width={0}
          height={0}
          sizes="100vw"
          alt="tool image"
          priority
        />
        <p className="text-paragraph-md font-bold">{name}</p>
      </div>
      <div className="flex items-center space-x-[6px]">
        <IconFlag className="flex-shrink-0 text-text" />
        <p className="text-text text-paragraph-xs font-medium">
          {tags.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default Tool;
