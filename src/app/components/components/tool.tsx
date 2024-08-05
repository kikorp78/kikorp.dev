import Image, { StaticImageData } from 'next/image';
import { FC, ReactElement, isValidElement } from 'react';

interface Props {
  name: string;
  icon: StaticImageData | ReactElement;
}

const Tool: FC<Props> = ({ name, icon }) => {
  return (
    <div className="flex h-full select-none items-center space-x-2 rounded-lg border border-border p-4 transition hover:bg-background-hover">
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
