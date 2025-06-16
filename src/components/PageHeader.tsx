import React, { useState } from 'react';
import { HistoryIcon, UploadIcon } from './icons';
import EditVariablesSidebar from './EditVariablesSidebar';

interface PageHeaderProps {
  title: string;
  icon?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, icon }) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isEditSidebarOpen, setIsEditSidebarOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditSidebarOpen(true);
    setActiveButton('edit');
  };

  const handleCloseSidebar = () => {
    setIsEditSidebarOpen(false);
    setActiveButton(null);
  };

  return (
    <>
      <div className="flex items-center justify-between px-8">
        <div className="flex items-center">
          {icon}
          <h1 className="text-white text-2xl font-semibold ml-3">{title}</h1>
        </div>

        <div className="flex items-center gap-4">
          {/* History Button */}
          <button 
            onClick={() => setActiveButton(activeButton === 'history' ? null : 'history')}
            className={`bg-[#242424] border border-[#5A5A5A] rounded-[4px] p-[9px] flex items-center justify-center transition-colors ${
              activeButton === 'history' ? 'bg-[#FFFFFF1A] border-[#525252]' : ''
            }`}
          >
            <HistoryIcon className={`w-5 h-5 transition-colors ${
              activeButton === 'history' ? 'text-[#FFFFFF]' : 'text-[#858882]'
            }`} />
          </button>

          {/* Edit Variables Button */}
          <button 
            onClick={handleEditClick}
            className={`bg-[#242424] border border-[#5A5A5A] rounded-[4px] p-[9px] flex items-center justify-center transition-colors ${
              activeButton === 'edit' ? 'bg-[#FFFFFF1A] border-[#525252]' : ''
            }`}
          >
            <span className={`text-sm whitespace-nowrap transition-colors ${
              activeButton === 'edit' ? 'text-[#FFFFFF]' : 'text-[#858882]'
            }`}>
              Edit Variables
            </span>
          </button>

          {/* Upload Button */}
          <button 
            onClick={() => setActiveButton(activeButton === 'upload' ? null : 'upload')}
            className={`bg-[#242424] border border-[#5A5A5A] rounded-[4px] p-[9px] flex items-center justify-center transition-colors ${
              activeButton === 'upload' ? 'bg-[#FFFFFF1A] border-[#525252]' : ''
            }`}
          >
            <UploadIcon className={`w-5 h-5 transition-colors ${
              activeButton === 'upload' ? 'text-[#FFFFFF]' : 'text-[#858882]'
            }`} />
          </button>
        </div>
      </div>

      <EditVariablesSidebar 
        isOpen={isEditSidebarOpen} 
        onClose={handleCloseSidebar} 
      />
    </>
  );
};

export { PageHeader }; 