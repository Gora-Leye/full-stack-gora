import React from 'react';

const Sidebar = ({ currentUser }) => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col flex-shrink-0">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold tracking-wide">RED PRODUCT</h1>
      </div>

      <div className="p-6 flex-1">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Principal
        </h2>
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center space-x-3 p-3 bg-indigo-900 rounded-lg text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="font-medium">Dashboard</span>
          </a>
          
          <a
            href="#"
            className="flex items-center space-x-3 p-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="font-medium">Liste des hôtels</span>
          </a>
        </nav>
      </div>

      <div className="p-6 border-t border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="font-semibold text-sm">
              {currentUser?.name?.charAt(0) || 'M'}
            </span>
          </div>
          
          <div className="flex-1">
            <p className="font-semibold text-sm truncate">
              {currentUser?.name || 'Mouchamet Radiane'}
            </p>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs text-gray-400">En ligne</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;