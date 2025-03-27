import React from 'react';
import { FaCode, FaGithub } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  return (
    <header className="bg-leetcode-bg dark:bg-dark-100 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <FaCode className="text-primary-500 text-3xl mr-2" />
          <h1 className="text-2xl font-bold">LeetCode Stats Visualizer</h1>
        </div>
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          <a
            href="https://github.com/yourusername/leetcode-stats-visualizer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white flex items-center transition-colors"
          >
            <FaGithub className="text-xl mr-1" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 