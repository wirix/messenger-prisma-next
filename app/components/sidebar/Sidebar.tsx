import { ReactNode } from 'react';
import { DesktopSidebar } from './DesktopSidebar';
import MobileFooter from './MobileFooter';
import { User } from '@prisma/client';

export default async function Sidebar({
  children,
  currentUser,
}: {
  children: ReactNode;
  currentUser: User;
}) {
  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser} />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}
