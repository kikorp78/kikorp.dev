import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface Props {
  name: string;
  description: string;
  icon: StaticImageData;
}

const Tool: FC<Props> = ({ name, description, icon }) => {
  return (
    <div className="hover:bg-background-hover flex items-center p-5 space-x-2 border border-border rounded-lg transition select-none">
      <Image className="w-6 rounded" src={icon} sizes="24px" alt="tool image" />
      <p className="text-paragraph-md font-bold">{name}</p>
      <p className="text-text text-paragraph-xs font-medium">{description}</p>
    </div>
  );
};

export default Tool;
