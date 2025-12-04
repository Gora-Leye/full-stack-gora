import React, { useState, useEffect } from 'react';
import Login from './Login';
import RegisterPage from './RegisterPage';
import Dashboard from './Dashboard';

const App = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Vérifier si un utilisateur est déjà connecté
  useEffect(() => {
    const savedUser = localStorage.getItem('redProductCurrentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleSwitchToRegister = () => {
    setShowRegister(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegister(false);
  };

  const handleLogin = (email, password) => {
    // Simulation de connexion avec utilisateurs de test
    const testUsers = [
      { id: 1, name: "Admin", email: "admin@test.com", password: "123456" },
      { id: 2, name: "Mouchamet Radiane", email: "mouchamet@test.com", password: "123456" }
    ];
    
    const user = testUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      const userData = { ...user, password: undefined };
      setCurrentUser(userData);
      setIsLoggedIn(true);
      localStorage.setItem('redProductCurrentUser', JSON.stringify(userData));
      return { success: true, user: userData };
    }
    
    return { success: false, message: "Email ou mot de passe incorrect" };
  };

  const handleRegister = (userData) => {
    // Simulation d'inscription
    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      password: userData.password
    };

    // Connecter automatiquement l'utilisateur
    const userToLogin = { ...newUser, password: undefined };
    setCurrentUser(userToLogin);
    setIsLoggedIn(true);
    localStorage.setItem('redProductCurrentUser', JSON.stringify(userToLogin));
    
    return { success: true, user: userToLogin };
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('redProductCurrentUser');
    setShowRegister(false);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {isLoggedIn ? (
        <Dashboard 
          onLogout={handleLogout} 
          currentUser={currentUser}
        />
      ) : showRegister ? (
        <RegisterPage 
          onSwitchToLogin={handleSwitchToLogin}
          onRegister={handleRegister}
        />
      ) : (
        <Login 
          onSwitchToRegister={handleSwitchToRegister}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
};

export default App;