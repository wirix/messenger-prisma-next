import prisma from '@/app/libs/prismadb';

export const getMessages = async (id: string) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: id,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
		
    return messages;
  } catch (e: any) {
    return [];
  }
};