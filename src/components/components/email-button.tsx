'use client';

import Tooltip from '@/components/tooltip';
import Constants from '@/utils/constants';
import { IconMail } from '@tabler/icons-react';

import { FC } from 'react';
import toast from 'react-hot-toast';

const EmailButton: FC = () => {
  const handleClick = () => {
    navigator.clipboard
      .writeText(Constants.EMAIL)
      .then(() =>
        toast('Email copied to clipboard', {
          icon: '📋',
          style: {
            backgroundColor: 'var(--background-hover)',
            color: 'var(--foreground-hover)'
          }
        })
      )
      .catch(() => toast.error('Failed to copy email to clipboard'));
  };

  return (
    <Tooltip content="Copy Email">
      <button
        className="flex size-9 items-center justify-center rounded-md transition hover:bg-border"
        onClick={handleClick}
      >
        <IconMail />
      </button>
    </Tooltip>
  );
};

export default EmailButton;
