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
      <div className="px-4 md:px-8">
        <BestScenarioResults />
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-10">
          {/* Graph Section */}
          <div className="w-full lg:flex-[1.2]">
            <h2 className="text-[#FDFDFDFD] text-xl md:text-2xl font-semibold leading-[150%] tracking-[0%] font-['Roobert_TRIAL'] mb-4">
              Graphs
            </h2>
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] origin-left">
              <RevenueGraph />
            </div>
          </div>

          {/* Metric Cards Section */}
          <div className="w-full lg:flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[#FDFDFDFD] text-xl md:text-2xl font-semibold leading-[150%] tracking-[0%] font-['Roobert_TRIAL']">
                Key Performance Indicators
              </h2>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-[#18181A80] border border-[#5A5A5A] rounded-[5px]">
                <span className="text-[#FCFCFC] text-sm font-medium leading-[150%] tracking-[-4%] font-['Inter']">
                  Variables
                </span>
                <PlusIcon className="text-[#FCFCFC]" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 h-auto lg:h-[500px]">
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