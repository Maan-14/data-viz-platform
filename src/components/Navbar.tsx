import { useState } from 'react';
import { SearchIcon } from './icons/SearchIcon';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Charging Stations');
  const tabs = ['Charging Stations', 'Fleet Sizing', 'Parking'];

  return (
    <div className="bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${activeTab === tab
                      ? 'border-yellow-400 text-yellow-400'
                      : 'border-transparent text-gray-300 hover:text-gray-100 hover:border-gray-300'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative">
              {/* Icon container */}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>

              {/* Input field */}
              <input
                type="text"
                className="block w-64 pl-10 pr-3 py-1.5 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;