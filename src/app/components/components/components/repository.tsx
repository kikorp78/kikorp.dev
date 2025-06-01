import GitHubColors from 'github-colors';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  name: string;
  description: string | null;
  url: string;
  language?: string | null;
  organization?: {
    name: string;
    avatarUrl: string;
  };
}

const Repository: FC<Props> = ({
  name,
  description,
  url,
  language,
  organization
}) => {
  return (
    <Link
      className="flex cursor-pointer select-none flex-col items-start space-y-4 rounded-lg border border-border p-4 transition hover:bg-background-hover xl:flex-row xl:space-x-[10px] xl:space-y-0"
      href={url}
      target="_blank"
      rel="noopener,noreferrer"
    >
      <div className="flex w-full flex-col space-y-2">
        <div className="flex items-center space-x-4">
          <p className="text-paragraph-md font-semibold">{name}</p>
          {organization ? (
            <div className="flex items-center space-x-2">
              <Image
                className="w-4 rounded-md"
                src={organization.avatarUrl}
                width={16}
                height={16}
                alt="github organization image"
              />
              <p className="text-paragraph-xs font-medium text-foreground">
                {organization.name}
              </p>
            </div>
          ) : null}
        </div>
        <p className="text-paragraph-sm font-medium text-foreground">
          {description}
        </p>
      </div>
      {language ? (
        <div className="flex items-center space-x-[6px]">
          <div
            className="size-3 rounded-full"
            style={{ backgroundColor: GitHubColors.get(language).color }}
          />
          <p className="text-paragraph-xs font-medium text-foreground">
            {language}
          </p>
        </div>
      ) : null}
    </Link>
  );
};

export default Repository;
