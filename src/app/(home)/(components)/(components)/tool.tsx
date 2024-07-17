import Image from 'next/image';
import { FC } from 'react';

interface Props {
  name: string;
  description: string;
  iconURL: string;
}

const Tool: FC<Props> = ({ name, description, iconURL }) => {
  return (
    <div className="hover:bg-background-hover flex items-center p-5 space-x-2 border border-border rounded-lg transition select-none">
      <Image
        className="w-6 rounded"
        src={iconURL}
        width={0}
        height={0}
        sizes="100vw"
        alt="tool image"
        priority
      />
      <p className="text-paragraph-md font-bold">{name}</p>
      <p className="text-text text-paragraph-xs font-medium">{description}</p>
    </div>
  );
};

export default Tool;
