import { getCurrentUser } from '@/app/actions';
import prisma from '@/app/libs/prismadb';

export const getConversationById = async (id: string) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.email) {
      return null;
    }

    const conversation = await prisma.conversation.findUnique({
      where: {
        id,
      },
      include: {
        users: true,
      },
    });
    
    return conversation;
  } catch (e: any) {
    return null;
  }
};
