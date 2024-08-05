import { IconBrandGithub } from '@tabler/icons-react';

import { FC, Suspense } from 'react';

import RepositoryList from './components/repository-list';
import RepositorySkeleton from './components/repository-skeleton';

const Repositories: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <IconBrandGithub className="text-foreground" />
        <p className="text-paragraph-sm font-bold uppercase text-foreground">
          GitHub Repositories
        </p>
      </div>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 xl:grid-cols-3">
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
