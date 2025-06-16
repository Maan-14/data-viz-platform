import { useState } from 'react';
import { SearchIcon } from './icons/SearchIcon';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Charging Stations');
  const tabs = ['Charging Stations', 'Fleet Sizing', 'Parking'];

  return (
    <nav className="shadow-sm bg-black">
      <div className="h-full px-6 py-5 flex justify-between items-center">
        {/* Tabs Container */}
        <div className="flex items-center gap-[21px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 rounded-md transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#242424] border border-[#5A5A5A] text-white'
                  : 'text-[#858882] hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Container */}
        <div className="flex items-center">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-[#858882]" />
            </div>
            <input
              type="text"
              className="block w-64 pl-10 pr-3 py-1.5 border border-[#525252] rounded-md bg-[#242424] text-white placeholder-[#EDEDED] focus:outline-none focus:ring-1 focus:ring-[#5A5A5A] focus:border-[#5A5A5A] sm:text-sm"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;