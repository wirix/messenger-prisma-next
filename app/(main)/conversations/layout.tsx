import Sidebar from '@/app/components/sidebar/Sidebar';
import { ReactNode } from 'react';
import { ConversationsList } from './components';
import { getConversations } from '@/app/actions';

export default async function ConversationsLayout({ children }: { children: ReactNode }) {
  const conversations = await getConversations();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className='h-full'>
        <ConversationsList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
