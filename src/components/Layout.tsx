import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] h-screen text-white overflow-hidden">
      <Sidebar />
      <div className="flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 p-10 border border-[#525252] rounded-[5px] overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;