import { FC } from 'react';

const RepositorySkeleton: FC = () => {
  return (
    <div className="flex flex-col p-5 space-y-3 border border-border rounded-lg">
      <div className="skeleton w-full max-w-40 h-4 rounded-md" />
      <div className="skeleton w-full max-w-96 h-4 rounded-md" />
    </div>
  );
};

export default RepositorySkeleton;
