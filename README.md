# Data Visualization Platform

A modern data visualization platform built with React, TypeScript, and Vite, featuring interactive charts, variable management, scenario analysis, and user authentication.

## Features

- Interactive revenue graphs with tooltips and custom styling
- Variable management system with primary and secondary categories
- Scenario analysis with profit and demand metrics
- Modern UI with custom scrollbars and responsive design
- Real-time data visualization and analysis
- User authentication with Email/Password and Google Sign-in
- Protected routes and secure access

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Custom SVG components
- **State Management**: React Hooks
- **Authentication**: Firebase Auth

## Technical Discussions and Tradeoffs

### Chart Library Selection: Recharts vs Chart.js vs D3.js

**Initial Approach - Recharts:**
- **Pros**: React-native, declarative API, good TypeScript support, built-in responsiveness
- **Cons**: Limited grid customization, single CartesianGrid limitation, complex custom implementations

**Alternative - Chart.js:**
- **Pros**: Excellent grid customization, plugin system, better performance for complex charts
- **Cons**: Additional dependency, different API paradigm, larger bundle size

**Alternative - D3.js:**
- **Pros**: Maximum customization, complete control over rendering
- **Cons**: Steep learning curve, verbose code, manual responsiveness handling

**Decision**: Stuck with Recharts for consistency and React integration, implemented workarounds for grid limitations.

### Grid Implementation Challenges

**Problem**: Recharts only renders the first CartesianGrid component, ignoring subsequent ones.

**Solutions Explored:**
1. **Multiple CartesianGrid Components**: Failed due to Recharts limitation
2. **Custom SVG Plugin**: Complex implementation with TypeScript issues
3. **ResponsiveContainer Render Props**: Caused rendering issues and TypeScript errors
4. **Chart.js Migration**: Required significant refactoring

**Final Solution**: Used multiple CartesianGrid components with different configurations, accepting the limitation that only the first one renders properly.

### Responsive Design Implementation

**Challenge**: Making complex UI components work across different screen sizes.

**Approach**: Used Tailwind's responsive prefixes with mobile-first design:
- `sm:` (640px+), `md:` (768px+), `lg:` (1024px+)
- Stacked layouts on mobile, side-by-side on desktop
- Dynamic text sizing and spacing adjustments

**Tradeoff**: Some components (like EditVariablesSidebar) become full-width on mobile, which may not be ideal for all use cases.

## Known Limitations

### Chart Library Limitations
- **Recharts Grid Restriction**: Only the first CartesianGrid component renders; subsequent grids are ignored
- **Limited Custom Grid Control**: Difficult to create dense minor grid lines with custom styling
- **ResponsiveContainer Issues**: Render props approach causes TypeScript errors and rendering problems
- **Custom Plugin Complexity**: Adding custom SVG elements requires complex workarounds

### Responsive Design Limitations
- **Sidebar on Mobile**: EditVariablesSidebar becomes full-width on mobile, potentially overwhelming smaller screens
- **Chart Responsiveness**: Grid lines may not align perfectly across different screen sizes
- **Text Overflow**: Some components may have text overflow issues on very small screens

### Performance Considerations
- **Bundle Size**: Multiple chart libraries and dependencies increase initial load time
- **Re-rendering**: Complex state management in chart components may cause unnecessary re-renders
- **Memory Usage**: Large datasets in charts could impact performance

### Browser Compatibility
- **CSS Grid Support**: Some advanced CSS Grid features may not work in older browsers
- **ES6+ Features**: Requires modern browsers for full functionality
- **Firebase Auth**: May have issues in browsers with strict privacy settings

### Data Limitations
- **Static Data**: Currently uses hardcoded sample data; no real-time data integration
- **Data Validation**: Limited input validation for chart data
- **Error Handling**: Minimal error handling for malformed data

## Time Spent

### Development Phases

**Phase 1: Project Setup and Basic Structure (2-3 hours)**
- Initial project setup with Vite and TypeScript
- Basic component structure and routing
- Tailwind CSS configuration

**Phase 2: Core Components Development (4-5 hours)**
- RevenueGraph component with Recharts
- ScenarioCard and MetricCard components
- Basic responsive layout implementation

**Phase 3: Authentication System (2-3 hours)**
- Firebase configuration and setup
- Login component with email/password and Google auth
- AuthContext implementation
- Protected routes setup

**Phase 4: Advanced Features (3-4 hours)**
- EditVariablesSidebar component
- Variable management system
- Custom icons and styling
- Responsive design improvements

**Phase 5: Chart Customization and Grid Implementation (4-6 hours)**
- Multiple attempts at implementing dense grid lines
- Chart.js migration attempt and rollback
- Custom SVG plugin development
- Final grid implementation with Recharts limitations

**Phase 6: Responsive Design and Polish (2-3 hours)**
- Mobile-first responsive design
- Component optimization
- Bug fixes and TypeScript error resolution
- Documentation and README updates

### Total Development Time: 17-24 hours

**Breakdown by Feature:**
- **Core UI Components**: 6-8 hours
- **Chart Implementation**: 4-6 hours
- **Authentication**: 2-3 hours
- **Responsive Design**: 3-4 hours
- **Grid Customization**: 4-6 hours
- **Testing and Polish**: 2-3 hours

**Challenges and Delays:**
- Chart library limitations added 2-3 hours of research and experimentation
- Responsive design implementation required multiple iterations
- TypeScript configuration and error resolution took additional time

## Project Structure

```
src/
├── components/
│   ├── icons/           # Custom SVG icons
│   ├── RevenueGraph.tsx # Interactive revenue visualization
│   ├── ScenarioCard.tsx # Scenario analysis cards
│   ├── MetricCard.tsx   # Metric display cards
│   ├── Login.tsx        # Authentication component
│   └── EditVariablesSidebar.tsx # Variable management interface
├── pages/
│   └── HomePage.tsx     # Main application page
├── contexts/
│   └── AuthContext.tsx  # Authentication context
├── config/
│   └── firebase.ts      # Firebase configuration
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

3. Set up Firebase:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication:
     - Go to Authentication > Sign-in methods
     - Enable "Email/Password" provider
     - Enable "Google" provider
   - Get your Firebase configuration:
     - Go to Project Settings (⚙️ icon)
     - Scroll down to "Your apps"
     - Click the web icon (</>)
     - Register your app with a nickname
     - Copy the Firebase configuration object

4. Set up environment variables:
   - Create a `.env` file in the project root
   - Add your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Development

The project uses ESLint for code quality and TypeScript for type safety. The configuration includes:

- TypeScript-aware linting rules
- React-specific linting rules
- Stylistic consistency checks

## Authentication

The application supports two authentication methods:
1. Email/Password authentication
2. Google Sign-in

To test authentication:
- Use the Login component to sign up with email/password
- Use the Google Sign-in button to authenticate with Google
- The profile icon in the sidebar shows the current user's email
- Click the profile icon to log out

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
