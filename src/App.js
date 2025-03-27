import React, { useState } from 'react';
import Header from './components/Header';
import UserForm from './components/UserForm';
import UserProfile from './components/UserProfile';
import ProblemDistribution from './components/ProblemDistribution';
import RecentSubmissions from './components/RecentSubmissions';
import SkillRadar from './components/SkillRadar';
import LoadingSpinner from './components/LoadingSpinner';
import { fetchUserStats, getRecentSubmissions } from './services/leetcodeApi';

function App() {
  const [userData, setUserData] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUserSubmit = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const stats = await fetchUserStats(username);
      const recentSubmissions = await getRecentSubmissions(username);
      setUserData(stats);
      setSubmissions(recentSubmissions);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message || 'An error occurred while fetching LeetCode data');
      setUserData(null);
      setSubmissions([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-dark-100 transition-colors duration-200">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <UserForm onSubmit={handleUserSubmit} isLoading={loading} />
        
        {loading && (
          <div className="mt-12 flex flex-col items-center">
            <LoadingSpinner size="lg" />
            <p className="mt-4 text-gray-600 dark:text-gray-300">Fetching LeetCode stats...</p>
          </div>
        )}
        
        {error && (
          <div className="mt-8 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        {userData && !loading && (
          <div className="mt-8 space-y-6">
            <UserProfile profile={userData} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProblemDistribution stats={userData} />
              <SkillRadar />
            </div>
            
            <div>
              <RecentSubmissions submissions={submissions} />
            </div>
          </div>
        )}
      </main>
      
      <footer className="bg-leetcode-bg dark:bg-dark-200 text-gray-300 p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>
            LeetCode Stats Visualizer | 
            <a
              href="https://github.com/yourusername/leetcode-stats-visualizer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 ml-1"
            >
              GitHub
            </a>
          </p>
          <p className="text-sm mt-1">
            This application is not affiliated with or endorsed by LeetCode.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
