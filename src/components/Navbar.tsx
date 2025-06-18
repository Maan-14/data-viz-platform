import { useState } from 'react';
import { SearchIcon } from './icons/SearchIcon';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Charging Stations');
  const tabs = ['Charging Stations', 'Fleet Sizing', 'Parking'];

  return (
    <nav className="shadow-sm bg-black">
      <div className="h-full px-4 md:px-6 py-4 md:py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        {/* Tabs Container */}
        <div className="flex items-center gap-3 md:gap-[21px] overflow-x-auto w-full md:w-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 md:px-4 py-2 md:py-2.5 rounded-md transition-all duration-300 whitespace-nowrap ${
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
        <div className="flex items-center w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-4 w-4 md:h-5 md:w-5 text-[#858882]" />
            </div>
            <input
              type="text"
              className="block w-full pl-9 md:pl-10 pr-3 py-1.5 border border-[#525252] rounded-md bg-[#242424] text-white placeholder-[#EDEDED] focus:outline-none focus:ring-1 focus:ring-[#5A5A5A] focus:border-[#5A5A5A] text-sm"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;