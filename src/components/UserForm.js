import React, { useState } from 'react';
import { FaSearch, FaUser, FaArrowRight } from 'react-icons/fa';

const UserForm = ({ onSubmit, isLoading }) => {
  const [username, setUsername] = useState('');
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username.trim());
    }
  };

  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md dark:shadow-lg p-6 max-w-xl mx-auto mt-8 transition-colors duration-200">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Enter LeetCode Username</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Get detailed statistics and insights about your LeetCode journey.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className={`relative transition-all duration-200 ${focused ? 'scale-105' : ''}`}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaUser className={`${focused ? 'text-primary-500' : 'text-gray-400 dark:text-gray-500'} transition-colors`} />
          </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="leetcode_user"
            className="w-full pl-10 pr-12 py-3 border-2 dark:bg-dark-300 dark:text-white dark:border-dark-500 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
              transition-all duration-200 shadow-sm hover:shadow
              dark:placeholder-gray-500"
            disabled={isLoading}
          />
          {username && (
            <button
              type="button"
              onClick={() => setUsername('')}
              className="absolute inset-y-0 right-12 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <span className="text-xs font-medium">✕</span>
            </button>
          )}
        </div>
        
        <button
          type="submit"
          className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-200
            ${focused ? 'shadow-md' : 'shadow'}
            ${
              isLoading
                ? 'bg-gray-400 dark:bg-dark-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white'
            }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Fetching Stats...</span>
            </div>
          ) : (
            <div className="flex items-center">
              <FaSearch className="mr-2" />
              <span>Fetch Stats</span>
              <FaArrowRight className="ml-2 text-sm" />
            </div>
          )}
        </button>
      </form>
      
      <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
        Try with usernames like: "johnsmith", "leetcode", or "coder123"
      </div>
    </div>
  );
};

export default UserForm; 