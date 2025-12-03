// LoginPage.jsx
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8">
        {/* TITRE PRINCIPAL - BIEN EN ANGLAIS "RED PRODUCT" */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
          RED PRODUCT
        </h1>
        
        {/* Sous-titre en français */}
        <p className="text-center text-gray-600 mb-6 text-sm">
          Connectez-vous en tant qu'Admin
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Champ Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-800 focus:border-gray-800 text-sm"
              placeholder="admin@example.com"
              required
            />
          </div>

          {/* Champ Mot de passe */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-800 focus:border-gray-800 text-sm"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Case à cocher */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 border-gray-300 rounded focus:ring-gray-800"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              Garde-moi connecté
            </label>
          </div>

          {/* Bouton de connexion */}
          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-md text-sm transition-colors mt-2"
          >
            Se connecter
          </button>
        </form>

        {/* Liens secondaires */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-col space-y-3 text-center text-sm">
            <a
              href="#"
              className="text-yellow-600 hover:text-yellow-700 transition-colors"
            >
              Mot de passe oublié ?
            </a>
            <div className="text-gray-600">
              Vous n'avez pas de compte ?{' '}
              <a
                href="#"
                className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
              >
                S'inscrire
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;