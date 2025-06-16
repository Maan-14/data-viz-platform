import { useState } from 'react';
import {
  HomeIcon,
  BellIcon,
  CalendarIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  Bars3Icon,
} from '../components/icons';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeTab, setActiveTab] = useState('Home');

  const menuItems = [
    { icon: HomeIcon, label: 'Home' },
    { icon: BellIcon, label: 'Notifications' },
    { icon: CalendarIcon, label: 'Schedule' },
    { icon: CloudArrowUpIcon, label: 'Upload' },
    { icon: Cog6ToothIcon, label: 'Settings' },
  ];

  return (
    <aside
      className={`flex flex-col h-full bg-black shadow-lg transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex flex-col items-center py-4 space-y-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg pt-4"
        >
          <Bars3Icon className="h-6 w-6 text-[#858882]" />
        </button>

        {menuItems.map((item, index) => (
          <div key={index} className="w-full flex items-center px-5">
            <button
              onClick={() => setActiveTab(item.label)}
              className={`flex flex-col items-center justify-center w-10 h-10 rounded-[10px] transition-colors ${
                activeTab === item.label 
                  ? 'bg-[#FFFFFF1A] border border-[#525252]' 
                  : ''
              }`}
            >
              <item.icon className={`h-6 w-6 transition-colors ${
                activeTab === item.label ? 'text-[#FFFFFF]' : 'text-[#858882]'
              }`} />
            </button>
            <span 
              className={`ml-4 text-white transition-all duration-300 ${
                isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;