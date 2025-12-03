// App.jsx
import React, { useState } from 'react';
import Login from './Login';
import RegisterPage from './RegisterPage';

const App = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleSwitchToRegister = () => {
    setShowRegister(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegister(false);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {showRegister ? (
        <RegisterPage onSwitchToLogin={handleSwitchToLogin} />
      ) : (
        <Login onSwitchToRegister={handleSwitchToRegister} />
      )}
    </div>
  );
};

export default App;