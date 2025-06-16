import { useState } from 'react';
import {
  HomeIcon,
  BellIcon,
  CalendarIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  Bars2Icon,
} from '../components/icons';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
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
      className={`flex flex-col h-full bg-gray-800 shadow-lg transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-700"
        >
          <Bars2Icon className="h-6 w-6 text-white" />
        </button>

        {menuItems.map((item, index) => (
          <button
              key={index}
              onClick={() => item.label === 'Home' && setActiveTab(item.label)}
              className={`w-full flex flex-col items-center px-4 py-3 text-gray-300 hover:bg-gray-700 transition-colors ${
                activeTab === item.label ? 'bg-gray-700 text-white' : ''
              }`}
            >
              <item.icon className="h-6 w-6 text-white" />
              {!isCollapsed && <span className="ml-3">{item.label}</span>}
            </button>
          ))}


    </aside>
  );
};

export default Sidebar;