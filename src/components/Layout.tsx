import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] h-screen bg-gray-900 text-white overflow-hidden">
      <Sidebar />
      <div className="overflow-hidden">
        <Navbar />
        <main className="p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;