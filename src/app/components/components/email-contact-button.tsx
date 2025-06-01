'use client';

import Constants from '@/utils/constants';
import { IconMail } from '@tabler/icons-react';

import { FC } from 'react';
import toast from 'react-hot-toast';

const EmailContactButton: FC = () => {
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
    <button
      className="flex h-full items-center space-x-3 rounded-lg border border-border p-4 transition hover:bg-background-hover"
      onClick={handleClick}
    >
      <IconMail />
      <p className="text-paragraph-sm font-semibold">Copy Email</p>
    </button>
  );
};

export default EmailContactButton;
