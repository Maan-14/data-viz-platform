import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import { useAuth } from './contexts/AuthContext';

function AppContent() {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Layout>
      <HomePage />
    </Layout>
  ) : (
    <Login />
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;