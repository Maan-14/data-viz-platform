import React from 'react';

interface MetricCardProps {
  title: string;
  description: string;
  value: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, description, value }) => {
  return (
    <div className="w-full p-[30px] rounded-[5px] border border-[#525252] bg-[#222324] flex flex-col gap-2">
      <h3 className="text-white text-lg font-medium leading-[100%] tracking-[-4%] font-['Inter']">
        {title}
      </h3>
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