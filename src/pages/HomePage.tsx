import { PageHeader } from '../components/PageHeader';
import { BoltIcon } from '../components/icons';
import BestScenarioResults from '../components/BestScenarioResults';
import '../index.css';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#161618]">
      <PageHeader title="Charging Station" icon={<BoltIcon className="w-8 h-8 text-[#858882]" />} />
      <BestScenarioResults />
    </main>
  );
};

export default HomePage; 