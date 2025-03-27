import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ProblemDistribution = ({ stats }) => {
  const { easySolved, mediumSolved, hardSolved } = stats;
  
  const data = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        data: [easySolved, mediumSolved, hardSolved],
        backgroundColor: [
          '#00b8a3', // Easy (LeetCode green)
          '#ffc01e', // Medium (LeetCode yellow)
          '#ff375f', // Hard (LeetCode red)
        ],
        borderColor: [
          '#00a192',
          '#eeb01e',
          '#e0304f',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
          },
          color: document.documentElement.classList.contains('dark') ? '#e5e7eb' : '#374151',
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((acc, curr) => acc + curr, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          }
        },
        backgroundColor: document.documentElement.classList.contains('dark') ? 'rgba(30, 30, 30, 0.8)' : 'rgba(0, 0, 0, 0.7)',
        titleColor: document.documentElement.classList.contains('dark') ? '#e5e7eb' : '#fff',
        bodyColor: document.documentElement.classList.contains('dark') ? '#e5e7eb' : '#fff',
      }
    },
    cutout: '60%',
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md dark:shadow-lg p-5 transition-colors duration-200">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
        Problem Difficulty Distribution
      </h3>
      <div className="w-full max-w-xs mx-auto">
        <Doughnut data={data} options={options} />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-6 text-center">
        <div>
          <div className="text-leetcode-easy font-bold text-lg">{easySolved}</div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">Easy</div>
        </div>
        <div>
          <div className="text-leetcode-medium font-bold text-lg">{mediumSolved}</div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">Medium</div>
        </div>
        <div>
          <div className="text-leetcode-hard font-bold text-lg">{hardSolved}</div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">Hard</div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDistribution; 