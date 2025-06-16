import { PageHeader } from '../components/PageHeader';
import { BoltIcon, PlusIcon } from '../components/icons';
import BestScenarioResults from '../components/BestScenarioResults';
import MetricCard from '../components/MetricCard';
import RevenueGraph from '../components/RevenueGraph';
import { metricData } from '../data/metricData';
import '../index.css';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#161618]">
      <PageHeader title="Charging Station" icon={<BoltIcon className="w-8 h-8 text-[#858882]" />} />
      <div className="px-8">
        <BestScenarioResults />
        
        <div className="flex gap-10 mt-10">
          {/* Graph Section */}
          <div className="flex-[1.2]">
            <h2 className="text-[#FDFDFDFD] text-2xl font-semibold leading-[150%] tracking-[0%] font-['Roobert_TRIAL'] mb-4">
              Graphs
            </h2>
            <div className="w-full h-[500px] origin-left">
              <RevenueGraph />
            </div>
          </div>

          {/* Metric Cards Section */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[#FDFDFDFD] text-2xl font-semibold leading-[150%] tracking-[0%] font-['Roobert_TRIAL']">
                Key Performance Indicators
              </h2>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-[#18181A80] border border-[#5A5A5AA1] rounded-[5px]">
                <span className="text-[#FCFCFC] text-sm font-medium leading-[150%] tracking-[-4%] font-['Inter']">
                  Variables
                </span>
                <PlusIcon className="text-[#FCFCFC]" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8 h-[500px]">
              {metricData.map((metric) => (
                <MetricCard
                  key={metric.id}
                  title={metric.title}
                  description={metric.description}
                  value={metric.value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage; 