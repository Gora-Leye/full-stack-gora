import React from 'react';

const MetricCard = ({ title, number, description, color }) => {
  const colorConfig = {
    purple: { bg: 'bg-purple-100', dot: 'bg-purple-500', text: 'text-purple-800' },
    red: { bg: 'bg-red-100', dot: 'bg-red-500', text: 'text-red-800' },
    green: { bg: 'bg-green-100', dot: 'bg-green-500', text: 'text-green-800' },
    indigo: { bg: 'bg-indigo-100', dot: 'bg-indigo-500', text: 'text-indigo-800' },
    yellow: { bg: 'bg-yellow-100', dot: 'bg-yellow-500', text: 'text-yellow-800' },
    blue: { bg: 'bg-blue-100', dot: 'bg-blue-500', text: 'text-blue-800' }
  };

  const config = colorConfig[color] || colorConfig.purple;

  // Fonction pour obtenir l'icône en fonction du titre
  const getIcon = (title) => {
    switch (title) {
      case 'Formulaires':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'E-mails':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'Messages':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case 'Hôtels':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'Utilisateurs':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0c-.281.021-.563.043-.844.064A23.91 23.91 0 0112 15c-2.358 0-4.574.651-6.5 1.766" />
          </svg>
        );
      case 'Entités':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div className={`${config.bg} rounded-xl shadow-sm p-6 border border-transparent hover:shadow-md transition-shadow`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Titre avec point coloré */}
          <div className="flex items-center mb-2">
            <div className={`w-3 h-3 ${config.dot} rounded-full mr-3`}></div>
            <span className={`text-sm font-semibold ${config.text}`}>
              {title}
            </span>
          </div>

          {/* Nombre principal */}
          <p className="text-3xl font-bold text-gray-800 mb-2">{number}</p>
          
          {/* Description */}
          {description && (
            <p className="text-sm text-gray-700">{description}</p>
          )}
        </div>

        {/* Icône spécifique au type de métrique */}
        <div className={`${config.text} opacity-70`}>
          {getIcon(title)}
        </div>
      </div>

      {/* Barre de progression */}
      <div className="mt-4">
        <div className="h-1 w-full bg-white rounded-full overflow-hidden">
          <div 
            className={`h-full ${config.dot} rounded-full`}
            style={{ width: '70%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;