import Image, { StaticImageData } from 'next/image';
import { FC, ReactElement, isValidElement } from 'react';

interface Props {
  name: string;
  icon: StaticImageData | ReactElement;
}

const Tool: FC<Props> = ({ name, icon }) => {
  return (
    <div className="h-full hover:bg-background-hover flex items-center p-4 space-x-2 border border-border rounded-lg transition select-none">
      {isValidElement(icon) ? (
        icon
      ) : (
        <Image
          className="w-6 rounded"
          src={icon as StaticImageData}
          sizes="24px"
          alt="tool image"
        />
      )}
      <p className="text-paragraph-sm font-semibold">{name}</p>
    </div>
  );
};

export default Tool;
