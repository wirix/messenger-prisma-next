import { Conversation, Message, User } from '@prisma/client';
// for ts error in conversaions/layout
//   const conversations = await getConversations(); // return messages and users interface
// but import { Conversation } from '@prisma/client'; { initialItems }: { initialItems: Conversation[] } in conversaions/components/ConversationsList initialItems wait some Conversation[] (without messages and users why-to)

export type FullMessageText = Message & {
  sender: User;
  seen: User[];
};

export type FullConversationType = Conversation & {
  users: User[];
  messages: FullMessageText[];
};
