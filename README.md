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
