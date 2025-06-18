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
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 px-4 md:px-8 py-4 md:py-0">
        <div className="flex items-center">
          {icon}
          <h1 className="text-white text-xl md:text-2xl font-semibold ml-3">{title}</h1>
        </div>

        <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
          {/* History Button */}
          <button 
            onClick={() => setActiveButton(activeButton === 'history' ? null : 'history')}
            className={`flex-1 md:flex-none bg-[#242424] border border-[#5A5A5A] rounded-[4px] p-2 md:p-[9px] flex items-center justify-center transition-colors ${
              activeButton === 'history' ? 'bg-[#FFFFFF1A] border-[#525252]' : ''
            }`}
          >
            <HistoryIcon className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
              activeButton === 'history' ? 'text-[#FFFFFF]' : 'text-[#858882]'
            }`} />
          </button>

          {/* Edit Variables Button */}
          <button 
            onClick={handleEditClick}
            className={`flex-1 md:flex-none bg-[#242424] border border-[#5A5A5A] rounded-[4px] p-2 md:p-[9px] flex items-center justify-center transition-colors ${
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
            className={`flex-1 md:flex-none bg-[#242424] border border-[#5A5A5A] rounded-[4px] p-2 md:p-[9px] flex items-center justify-center transition-colors ${
              activeButton === 'upload' ? 'bg-[#FFFFFF1A] border-[#525252]' : ''
            }`}
          >
            <UploadIcon className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
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