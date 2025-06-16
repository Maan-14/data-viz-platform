import { PageHeader } from '../components/PageHeader';
import { BoltIcon } from '../components/icons';
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
          <div className="flex-1">
            <div className="w-full h-[449px] origin-left">
              <RevenueGraph />
            </div>
          </div>

          {/* Metric Cards Section */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-8 h-[449px]">
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