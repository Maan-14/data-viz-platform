// Theme Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  border: string;
}

// Variable Types
export interface Variable {
  id: string;
  name: string;
  description: string;
  selected: boolean;
  category: string;
  type: 'primary' | 'secondary';
  value?: number | string;
  unit?: string;
}

export interface VariableCategory {
  id: string;
  title: string;
  variables: Variable[];
}

// Chart Types
export interface DataPoint {
  month: string;
  revenue: number;
  profit?: number;
  demand?: number;
}

export interface ChartConfig {
  width: number;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

// Component Props Types
export interface EditVariablesSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onVariableSelect?: (variables: Variable[]) => void;
}

export interface RevenueGraphProps {
  data: DataPoint[];
  config?: Partial<ChartConfig>;
  onDataPointClick?: (point: DataPoint) => void;
}

export interface ScenarioCardProps {
  title: string;
  profit: number;
  satisfiedDemand: number;
  description: string;
  onSelect?: () => void;
  isSelected?: boolean;
}

export interface MetricCardProps {
  title: string;
  value: number;
  unit?: string;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
}

// Event Types
export interface MouseEvent<T = Element> extends React.MouseEvent<T> {
  target: EventTarget & T;
}

export interface ChangeEvent<T = Element> extends React.ChangeEvent<T> {
  target: EventTarget & T;
}

// API Types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: unknown;
}

// Layout Types
export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
  isActive?: boolean;
}

// State Types
export interface AppState {
  selectedVariables: Set<string>;
  hoveredVariable: Variable | null;
  isSidebarOpen: boolean;
  currentScenario: string | null;
}

// Action Types
export type ActionType = 
  | { type: 'SELECT_VARIABLE'; payload: string }
  | { type: 'DESELECT_VARIABLE'; payload: string }
  | { type: 'SET_HOVERED_VARIABLE'; payload: Variable | null }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'SET_SCENARIO'; payload: string | null }; 