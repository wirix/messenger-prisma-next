import { User } from '@prisma/client';
import Image from 'next/image';
import { HTMLAttributes, DetailedHTMLProps, FC } from 'react';

interface IAvatarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  user?: User;
}

export const Avatar: FC<IAvatarProps> = ({ user }) => {
  // const isActive =
  return (
    <div className="relative">
      <div
        className="
        relative 
        inline-block 
        rounded-full 
        overflow-hidden
        h-9 
        w-9 
        md:h-11 
        md:w-11
      ">
        <Image fill src={user?.image || '/images/placeholder.jpg'} alt="avatar" />
      </div>
      {/* {isActive ? ( */}
      <span
        className="
            absolute 
            block 
            rounded-full 
            bg-green-500 
            ring-2 
            ring-white 
            top-0 
            right-0
            h-2 
            w-2 
            md:h-3 
            md:w-3
          "
      />
      {/* // ) : null} */}
    </div>
  );
};
