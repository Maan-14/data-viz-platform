import { SparklesIcon, ArrowUpIcon } from './icons';
import ScenarioCard from './ScenarioCard';
import { scenarioData } from '../data/scenarioData';

const BestScenarioResults = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <SparklesIcon className="w-6 h-6 text-[#DCFF7FFD]" />
          <h2 className="text-[#DCFF7FFD] text-2xl font-semibold leading-[150%] font-['Roobert_TRIAL']">
            Best Scenario Results
          </h2>
        </div>
        
        <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-[56px] bg-[#18181A80] border border-[#C8E972]">
          <ArrowUpIcon className="w-4 h-4 text-white" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {scenarioData.map((scenario) => (
          <ScenarioCard key={scenario.id} text={scenario.text} />
        ))}
      </div>
    </div>
  );
};

export default BestScenarioResults; 