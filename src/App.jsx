import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/managetok" />} />
    </Routes>
  );
}

export default App;
