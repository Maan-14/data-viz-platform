import { PageHeader } from '../components/PageHeader';
import { BoltIcon } from '../components/icons';
import '../index.css';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#161618]">
      <PageHeader title="Charging Station" icon={<BoltIcon className="w-8 h-8 text-[#858882]" />} />
      <div className="pt-32 px-6">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <div className="mt-6">
            <p className="text-gray-600">Welcome to your dashboard. This is the main content area where you can add your data visualization components.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage; 