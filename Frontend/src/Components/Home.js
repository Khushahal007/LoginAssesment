import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve email from location state
  const email = location.state?.email;

  const handleLogout = () => {
    // Perform logout logic, e.g., clear user session, etc.
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    // Navigate back to the login page
    navigate('/');
  };

  return (
    <div>
    <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Welcome, {email}!</h1>
    <button
      onClick={handleLogout}
      style={{
        backgroundColor: '#f44336',
        color: '#fff',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Logout
    </button>
  </div>
  );
};

export default Home;
