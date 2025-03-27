import React from 'react';
import { FaClock, FaMemory, FaCheck, FaTimes } from 'react-icons/fa';

const RecentSubmissions = ({ submissions }) => {
  // Format date to relative time (e.g., "2 days ago")
  const formatRelativeTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    }
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    }
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    }
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
    
    const diffInMonths = Math.floor(diffInDays / 30);
    return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  };

  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md dark:shadow-lg p-5 transition-colors duration-200">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
        Recent Submissions
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-500">
          <thead className="bg-gray-50 dark:bg-dark-300">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Problem
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Language
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Runtime
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Memory
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Submitted
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-dark-200 divide-y divide-gray-200 dark:divide-dark-500">
            {submissions.map((submission, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-dark-300 transition-colors duration-150">
                <td className="px-4 py-3 whitespace-nowrap">
                  {submission.status === 'Accepted' ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
                      <FaCheck className="mr-1" /> Accepted
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400">
                      <FaTimes className="mr-1" /> Failed
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-200">
                        {submission.title}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        <span
                          className={`
                            ${
                              submission.difficulty === 'Easy'
                                ? 'text-leetcode-easy'
                                : submission.difficulty === 'Medium'
                                ? 'text-leetcode-medium'
                                : 'text-leetcode-hard'
                            }
                            font-medium
                          `}
                        >
                          {submission.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {submission.language}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <FaClock className="mr-1 text-gray-400 dark:text-gray-500" />
                    {submission.runtime}
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <FaMemory className="mr-1 text-gray-400 dark:text-gray-500" />
                    {submission.memory}
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {formatRelativeTime(submission.timestamp)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentSubmissions; 