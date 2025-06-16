import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChevronDownIcon, QuestionMarkIcon, IncrementUpIcon } from './icons';

// Sample data - replace with your actual data
const data = [
  { month: 'Mar', value: 20000, target: 60000 },
  { month: 'May', value: 50000, target: 65000 },
  { month: 'Jun', value: 42000, target: 70000 },
  { month: 'Jul', value: 90000, target: 75000 },
  { month: 'Sep', value: 51000, target: 80000 },
  { month: 'Oct', value: 59000, target: 85000 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const target = payload[0].payload.target;
    const percentageDiff = ((value - target) / target) * 100;

    return (
      <div className="bg-[#222324] border border-[#525252] p-4 rounded-lg shadow-[0px_4px_4px_0px_#00000040]">
        <div className="flex items-center justify-between">
          <p className="text-[#FCFCFC] text-xl font-bold leading-[100%] tracking-[-4%] font-['Inter']">
            ${(value / 1000).toFixed(1)}k
          </p>
          <QuestionMarkIcon className="w-4 h-4 text-[#FCFCFC]" />
        </div>
        <div className="flex items-center gap-2 mt-[10px]">
          <IncrementUpIcon className="w-4 h-4 text-[#878787]" />
          <p className="text-[#878787] text-base font-normal leading-[100%] tracking-[-4%] font-['Inter']">
            {percentageDiff > 0 ? '+' : ''}{percentageDiff.toFixed(1)}% above target
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const RevenueGraph = () => {
  const [selectedMetric] = useState('Unsatisfied Demand %');

  return (
    <div className="w-full h-full bg-[#222324] rounded-lg border border-[#525252] p-6">
      <div className="flex justify-end mb-6">
        <div className="relative">
          <div className="flex items-center gap-2 px-3 py-2 border border-[#5A5A5AA1] rounded-[5px] bg-[#18181A80] cursor-pointer">
            <span className="text-[#FCFCFC] text-sm font-medium leading-[150%] tracking-[-4%] font-['Inter']">
              {selectedMetric}
            </span>
            <ChevronDownIcon className="w-3 h-2 text-[#FCFCFC]" />
          </div>
          {/* Dropdown menu would go here */}
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis 
            dataKey="month" 
            stroke="#858882"
            tick={{ fill: '#858882' }}
          />
          <YAxis 
            stroke="#858882"
            tick={{ fill: '#858882' }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#C8E972"
            strokeWidth={2}
            dot={{ fill: '#C8E972', strokeWidth: 2 }}
            activeDot={{ r: 6, fill: '#C8E972' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueGraph; 