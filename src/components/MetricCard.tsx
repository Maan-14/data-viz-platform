import React from 'react';
import { QuestionMarkIcon } from './icons';

interface MetricCardProps {
  title: string;
  description: string;
  value: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, description, value }) => {
  return (
    <div className="w-full p-[30px] rounded-[5px] border border-[#525252] bg-[#222324] flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-white text-lg font-medium leading-[100%] tracking-[-4%] font-['Inter']">
          {title}
        </h3>
        <QuestionMarkIcon className="w-4 h-4 text-[#858882]" />
      </div>
      <p className="text-[#BBBBBB] text-xs font-light leading-[150%] tracking-[0%] font-['Inter']">
        {description}
      </p>
      <div className="mt-auto">
        <p className="text-white text-[32px] font-bold leading-[88%] tracking-[-2%] text-right font-['Roobert_TRIAL']">
          {value}
        </p>
      </div>
    </div>
  );
};

export default MetricCard; 