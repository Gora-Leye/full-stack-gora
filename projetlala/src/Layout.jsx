import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children, title, onLogout, currentUser }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentUser={currentUser} />
      
      <div className="flex-1">
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div className="flex-1">
            {title && (
              <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            )}
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-64"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-3 focus:outline-none"
              >
                <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {currentUser?.name?.charAt(0) || 'A'}
                </div>
                <div className="text-left hidden md:block">
                  <p className="text-sm font-medium text-gray-700">
                    {currentUser?.name || 'Administrateur'}
                  </p>
                  <p className="text-xs text-gray-500">
                    {currentUser?.email || 'admin@test.com'}
                  </p>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{currentUser?.name || 'Administrateur'}</p>
                    <p className="text-xs text-gray-500 truncate">{currentUser?.email || 'admin@test.com'}</p>
                  </div>
                  <button
                    onClick={() => {
                      onLogout();
                      setShowUserMenu(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Déconnexion
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
        
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;