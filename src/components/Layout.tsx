
import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="ml-0 transition-all duration-300">
        {children}
      </main>
    </div>
  );
};

export default Layout;
