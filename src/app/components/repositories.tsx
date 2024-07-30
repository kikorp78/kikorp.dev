import { IconBrandGithub } from '@tabler/icons-react';

import { FC, Suspense } from 'react';

import RepositorySkeleton from './components/components/repository-skeleton';
import RepositoryList from './components/repository-list';

const Repositories: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <IconBrandGithub className="text-text" />
        <p className="text-text text-paragraph-sm font-bold uppercase">
          GitHub Repositories
        </p>
      </div>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start gap-4">
            <RepositorySkeleton />
            <RepositorySkeleton />
            <RepositorySkeleton />
            <RepositorySkeleton />
          </div>
        }
      >
        <RepositoryList />
      </Suspense>
    </div>
  );
};

export default Repositories;
