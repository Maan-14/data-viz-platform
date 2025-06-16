import React, { useState } from 'react';
import { CrossIcon, SearchIcon, SparklesIcon, ReloadIcon, PlusIcon, TickIcon, ExclamationIcon } from './icons';
import type { Variable } from '../data/variableData';
import { variableCategories as initialCategories } from '../data/variableData';

interface EditVariablesSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditVariablesSidebar: React.FC<EditVariablesSidebarProps> = ({ isOpen, onClose }) => {
  const [hoveredVariable, setHoveredVariable] = useState<Variable | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);
  const [selectedVariables, setSelectedVariables] = useState<Set<string>>(new Set());

  const handleVariableHover = (variable: Variable) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    const timeout = setTimeout(() => {
      setHoveredVariable(variable);
    }, 1500);
    setHoverTimeout(timeout);
  };

  const handleVariableLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setHoveredVariable(null);
  };

  const handleVariableClick = (variableId: string) => {
    setSelectedVariables(prev => {
      const newSet = new Set(prev);
      if (newSet.has(variableId)) {
        newSet.delete(variableId);
      } else {
        newSet.add(variableId);
      }
      return newSet;
    });
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-[4px] z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 w-1/2 h-full bg-[#0E0D0D] border-l border-[#525252] transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-white text-2xl font-medium leading-[150%] tracking-[-2.3%] font-['Inter']">
              Edit Variables
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-[#FFFFFF1A] rounded-lg transition-colors"
            >
              <CrossIcon className="w-5 h-5 text-[#858882]" />
            </button>
          </div>

          {/* Search Section */}
          <div className="flex items-center gap-4 mb-8">
            {/* Search Box */}
            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <SearchIcon className="w-5 h-5 text-[#858882]" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full h-[38px] pl-10 pr-3 py-2 bg-[#242424] border border-[#525252] rounded-[5px] text-white placeholder-[#858882] focus:outline-none focus:border-[#858882]"
              />
            </div>

            {/* Autofill Button */}
            <button className="flex items-center gap-2.5 bg-[#242424] border border-[#5A5A5A] rounded-[4px] shadow-[0px_0px_12.7px_0px_#FFFFFF0D_inset]">
              <SparklesIcon className="text-[#B9B9B9]" />
              <span className="text-white text-sm font-medium">Autofill</span>
            </button>

            {/* Rerun Button */}
            <button className="flex items-center gap-2.5 bg-[#23291E] border border-[#C8E972] rounded-[4px] shadow-[0px_0px_12.7px_0px_#FFFFFF0D_inset]">
              <ReloadIcon/>
              <span className="text-[#C9FF3B] font-medium text-sm leading-[150%] tracking-[-2%]">
                Rerun
              </span>
            </button>
          </div>

          {/* Variable Categories Section */}
          <div className="flex-1 bg-[#161618] border border-[#525252] rounded-[5px] p-6 relative overflow-hidden">
            <div className="h-full overflow-y-auto custom-scrollbar">
              {initialCategories.map((category) => (
                <div key={category.id} className="mb-8 last:mb-0">
                  <h3 className="text-[#D5D5D5] text-[15px] font-medium leading-[150%] tracking-[-2.3%] font-['Inter'] mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {category.variables.map((variable) => {
                      const isSelected = selectedVariables.has(variable.id);
                      return (
                        <div
                          key={variable.id}
                          className={`flex items-center gap-3 px-[10px] py-[5px] rounded-[20px] cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-[#282E16] border-[#C9FF3B]'
                              : 'bg-[#242424] border-[#5A5A5A]'
                          } border`}
                          onMouseEnter={() => handleVariableHover(variable)}
                          onMouseLeave={handleVariableLeave}
                          onClick={() => handleVariableClick(variable.id)}
                        >
                          <span className={`text-sm px-2 ${
                            isSelected ? 'text-[#C8E972FD]' : 'text-[#858882]'
                          }`}>
                            {variable.name}
                          </span>
                          <SparklesIcon className={`w-[9.69px] h-[9.69px] ${
                            isSelected ? 'text-[#C9FF3B]' : 'text-[#858882]'
                          }`} />
                          {isSelected ? (
                            <TickIcon className="w-2 h-2 text-[#C9FF3B]" />
                          ) : (
                            <PlusIcon className="w-2 h-2 text-[#858882]" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            {/* Description Box */}
            {hoveredVariable && (
              <div className="absolute bottom-0 left-0 right-0 bg-[#222324] border-t border-[#525252] rounded-b-[4px] p-6">
                <div className="flex items-center gap-4 mb-2">
                  <h4 className="text-white text-lg font-medium">{hoveredVariable.name}</h4>
                  <ExclamationIcon className="w-4 h-4 text-[#858882]" />
                </div>
                <p className="text-[#BBBBBB] text-sm leading-[150%]">
                  {hoveredVariable.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditVariablesSidebar; 