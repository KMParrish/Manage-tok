import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Layout from './components/Layout';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import UserContext from './UserContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


function App() {
  const [user, setUser] = useState(null);

    // check for stored user on mount
    useEffect(() => {
      const auth = getAuth();
      const storedUser = JSON.parse(localStorage.getItem('user'));
  
      if (storedUser) {
        setUser(storedUser);
      }
  
      onAuthStateChanged(auth, (user) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          setUser(user);
        } else {
          localStorage.removeItem('user');
          setUser(null);
        }
      });
    }, []);
    
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<Navigate to="/managetok" />} />
      </Routes>
    </UserContext.Provider>

  );
}

export default App;
