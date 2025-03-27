import React from 'react';
import { FaTrophy, FaCalendarAlt, FaRegCalendarCheck, FaRegUserCircle } from 'react-icons/fa';

const UserProfile = ({ profile }) => {
  const { username, ranking, totalSolved, totalQuestions, submissionCalendar } = profile;

  // Calculate submission streak
  const getStreak = () => {
    if (!submissionCalendar) return 0;
    
    const calendar = JSON.parse(submissionCalendar);
    const now = new Date();
    let streak = 0;
    let currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    currentDate.setDate(currentDate.getDate() - 1); // Start from yesterday
    
    while (true) {
      const timestamp = Math.floor(currentDate.getTime() / 1000);
      const dateStr = timestamp.toString();
      
      if (calendar[dateStr]) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }
    
    return streak;
  };

  // Get total submissions
  const getTotalSubmissions = () => {
    if (!submissionCalendar) return 0;
    
    const calendar = JSON.parse(submissionCalendar);
    return Object.values(calendar).reduce((sum, count) => sum + count, 0);
  };

  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md dark:shadow-lg p-6 transition-colors duration-200">
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <div className="bg-leetcode-bg dark:bg-dark-300 rounded-full p-4 mb-4 sm:mb-0 sm:mr-4">
          <FaRegUserCircle className="text-white text-4xl" />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{username}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Ranking: <span className="font-semibold dark:text-gray-300">{ranking}</span>
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 dark:bg-dark-300 p-4 rounded-lg flex flex-col items-center transition-colors duration-200">
          <FaTrophy className="text-leetcode-medium text-2xl mb-2" />
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            {totalSolved} / {totalQuestions}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">Problems Solved</p>
        </div>
        
        <div className="bg-gray-50 dark:bg-dark-300 p-4 rounded-lg flex flex-col items-center transition-colors duration-200">
          <FaCalendarAlt className="text-primary-500 text-2xl mb-2" />
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            {getTotalSubmissions()}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">Total Submissions</p>
        </div>
        
        <div className="bg-gray-50 dark:bg-dark-300 p-4 rounded-lg flex flex-col items-center transition-colors duration-200">
          <FaRegCalendarCheck className="text-leetcode-easy text-2xl mb-2" />
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            {getStreak()}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">Current Streak</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 