import { FC } from 'react';

const RepositorySkeleton: FC = () => {
  return (
    <div className="flex flex-col space-y-3 rounded-lg border border-border p-4">
      <div className="skeleton h-4 w-full max-w-40 rounded-md" />
      <div className="skeleton h-4 w-full max-w-96 rounded-md" />
    </div>
  );
};

export default RepositorySkeleton;
