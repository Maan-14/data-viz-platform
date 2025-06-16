export interface Variable {
  id: string;
  name: string;
  category: string;
  selected?: boolean;
  description?: string;
}

export interface VariableCategory {
  id: string;
  name: string;
  title: string;
  variables: Variable[];
}

export const variableCategories: VariableCategory[] = [
  {
    id: '1',
    name: 'Demand',
    title: 'Demand',
    variables: [
      { id: '1-1', name: 'Peak Hours', category: 'Demand', description: 'Peak hours demand analysis' },
      { id: '1-2', name: 'Off-Peak Hours', category: 'Demand', description: 'Off-peak hours demand analysis' },
      { id: '1-3', name: 'Weekend Demand', category: 'Demand', description: 'Weekend demand analysis' },
      { id: '1-4', name: 'Holiday Demand', category: 'Demand', description: 'Holiday demand analysis' },
    ],
  },
  {
    id: '2',
    name: 'Pricing',
    title: 'Pricing',
    variables: [
      { id: '2-1', name: 'Base Rate', category: 'Pricing', description: 'Base rate analysis' },
      { id: '2-2', name: 'Peak Rate', category: 'Pricing', description: 'Peak rate analysis' },
      { id: '2-3', name: 'Off-Peak Rate', category: 'Pricing', description: 'Off-peak rate analysis' },
      { id: '2-4', name: 'Weekend Rate', category: 'Pricing', description: 'Weekend rate analysis' },
    ],
  },
  {
    id: '3',
    name: 'Capacity',
    title: 'Capacity',
    variables: [
      { id: '3-1', name: 'Station Capacity', category: 'Capacity', description: 'Station capacity analysis' },
      { id: '3-2', name: 'Charging Speed', category: 'Capacity', description: 'Charging speed analysis' },
      { id: '3-3', name: 'Queue Length', category: 'Capacity', description: 'Queue length analysis' },
    ],
  },
//   {
//     id: '4',
//     name: 'Costs',
//     title: 'Costs',
//     variables: [
//       { id: '4-1', name: 'Electricity Cost', category: 'Costs', description: 'Electricity cost analysis' },
//       { id: '4-2', name: 'Maintenance Cost', category: 'Costs', description: 'Maintenance cost analysis' },
//       { id: '4-3', name: 'Labor Cost', category: 'Costs', description: 'Labor cost analysis' },
//       { id: '4-4', name: 'Infrastructure Cost', category: 'Costs', description: 'Infrastructure cost analysis' },
//     ],
//   },
]; 