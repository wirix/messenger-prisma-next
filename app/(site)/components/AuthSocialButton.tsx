'use client';

import clsx from 'clsx';
import { DetailedHTMLProps, ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { IconType } from 'react-icons';

interface AuthSocialButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  Icon: IconType;
  onClick: () => void;
}

export const AuthSocialButton: FC<AuthSocialButtonProps> = ({
  Icon: Icon,
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(
        `
				inline-flex
        w-full 
        justify-center 
        rounded-md 
        bg-white 
        px-4 
        py-2 
        text-gray-500 
        shadow-sm 
        ring-1 
        ring-inset 
        ring-gray-300 
        hover:bg-gray-50 
        focus:outline-offset-0
	`,
        className,
      )}
      {...props}>
      <Icon />
    </button>
  );
};
