# Data Visualization Platform

A modern data visualization platform built with React, TypeScript, and Vite, featuring interactive charts, variable management, and scenario analysis.

## Features

- Interactive revenue graphs with tooltips and custom styling
- Variable management system with primary and secondary categories
- Scenario analysis with profit and demand metrics
- Modern UI with custom scrollbars and responsive design
- Real-time data visualization and analysis

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Custom SVG components
- **State Management**: React Hooks

## Project Structure

```
src/
├── components/
│   ├── icons/           # Custom SVG icons
│   ├── RevenueGraph.tsx # Interactive revenue visualization
│   ├── ScenarioCard.tsx # Scenario analysis cards
│   ├── MetricCard.tsx   # Metric display cards
│   └── EditVariablesSidebar.tsx # Variable management interface
├── pages/
│   └── HomePage.tsx     # Main application page
├── data/
│   └── variableData.ts  # Variable configuration and data
└── styles/
    └── index.css        # Global styles and custom scrollbar
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Development

The project uses ESLint for code quality and TypeScript for type safety. The configuration includes:

- TypeScript-aware linting rules
- React-specific linting rules
- Stylistic consistency checks

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
