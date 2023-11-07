import { useSession } from 'next-auth/react';
import { useMemo } from 'react';
import { FullConversationType } from '../types';
import { User } from '@prisma/client';

export const useOtherUser = (convesation: FullConversationType | {
	users: User[]
}) => {
	const session = useSession()
	const otherUser = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email;
    const otherUser = convesation.users.filter((user) => user.email !== currentUserEmail);

    return otherUser;
  }, [session?.data?.user?.email, convesation.users]);

	return otherUser;
};
