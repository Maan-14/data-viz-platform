import React, { useState } from 'react';
import { HistoryIcon } from './icons';
import { UploadIcon } from './icons';

interface PageHeaderProps {
  title: string;
  icon?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, icon }) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-between">
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
          onClick={() => setActiveButton(activeButton === 'edit' ? null : 'edit')}
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
  );
};

export { PageHeader }; 