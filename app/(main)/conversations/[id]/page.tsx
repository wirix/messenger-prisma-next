import { getConversationById, getMessages } from '@/app/actions';
import { EmptyState } from '@/app/components';
import { Header } from './components/Header';

interface IParams {
  id: string;
}

export default async function ConversationId({ params }: { params: IParams }) {
  const conversation = await getConversationById(params.id);
  const messages = await getMessages(params.id);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
      </div>
    </div>
  );
}
