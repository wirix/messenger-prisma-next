'use client';
import clsx from 'clsx';
import { useConversation } from '@/app/hooks';
import { EmptyState } from '@/app/components';

export default function Conversations() {
  const { isOpen } = useConversation();

  return (
    <div className={clsx(
			'lg:pl-80 h-full lg:block',
			isOpen ? 'block' : 'hidden'
		)}>
      <EmptyState />
    </div>
  );
}
