import React from 'react';
import { ThreeDotsIcon } from './icons';

interface ScenarioCardProps {
  text: string;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-between w-full h-[54px] rounded-[6px] border-[0.5px] border-[#C8E972] bg-[#CCFF0005] px-4 md:px-6 py-[15px]">
      <p className="text-[#BBBBBB] text-sm md:text-base leading-[150%] line-clamp-1 md:line-clamp-none pr-4">
        {text}
      </p>
      <ThreeDotsIcon className="w-5 h-5 text-[#858882] flex-shrink-0" />
    </div>
  );
};

export default ScenarioCard; 