import { ReactNode } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import { UserList } from './components';
import { getCurrentUser, getUsers } from '../actions';
//async, чтобы у нас была возможность использовать server component для загрузки юзеров из бд
export default async function UsersLayout({ children }: { children: ReactNode }) {
  // запуск const currentUser = await getCurrentUser(); должен быть в sidebar.tsx, но ошибка!
  const currentUser = await getCurrentUser();
  const users = await getUsers();

  return (
    <Sidebar currentUser={currentUser!}>
      <div className="h-full">
        <UserList items={users!} />
        {children}
      </div>
    </Sidebar>
  );
}
