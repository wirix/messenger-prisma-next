import { ReactNode } from 'react';
import { Sidebar } from '../components';
//async, чтобы у нас была возможность использовать server component для загрузки юзеров из бд
export default async function UsersLayout({ children }: { children: ReactNode }) {
  return (
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}
