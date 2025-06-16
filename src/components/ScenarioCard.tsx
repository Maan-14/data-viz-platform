import React from 'react';
import { ThreeDotsIcon } from './icons';

interface ScenarioCardProps {
  text: string;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-between w-full h-[54px] rounded-[6px] border-[0.5px] border-[#C8E972] bg-[#CCFF0005] px-6 py-[15px]">
      <p className="text-[#C9FF3B] text-base font-medium leading-[150%] tracking-[0%] font-['Inter']">
        {text}
      </p>
      <ThreeDotsIcon className="w-4 h-4 text-[#C8E972]" />
    </div>
  );
};

export default ScenarioCard; 