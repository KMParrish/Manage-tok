import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="*" element={<Navigate to="/managetok" />} />
    </Routes>
  );
}

export default App;
