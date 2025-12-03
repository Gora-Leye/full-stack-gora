// RegisterPage.jsx
import React, { useState } from 'react';

const RegisterPage = ({ onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, acceptTerms });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8">
        {/* Titre principal */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
          RED PRODUCT
        </h1>
        
        {/* Sous-titre */}
        <p className="text-center text-gray-600 mb-6 text-sm">
          Inscrivez-vous en tant que Admin
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Champ Nom */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-800 focus:border-gray-800 text-sm"
              placeholder="Votre nom complet"
              required
            />
          </div>

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
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="h-4 w-4 mt-1 border-gray-300 rounded focus:ring-gray-800"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              Accepter les termes et la politique
            </label>
          </div>

          {/* Bouton d'inscription */}
          <button
            type="submit"
            disabled={!acceptTerms}
            className={`w-full font-medium py-3 px-4 rounded-md text-sm transition-colors mt-2 ${
              acceptTerms 
                ? 'bg-gray-900 hover:bg-gray-800 text-white' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            S'inscrire
          </button>
        </form>

        {/* Lien de connexion */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="text-center text-sm">
            <div className="text-gray-600">
              Vous avez déjà un compte ?{' '}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors focus:outline-none"
              >
                Se connecter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;