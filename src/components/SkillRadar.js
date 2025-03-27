import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillRadar = () => {
  // Check if in dark mode
  const isDarkMode = document.documentElement.classList.contains('dark');

  // This is mock data. In a real application, you would get this data from the API
  const data = {
    labels: [
      'Arrays',
      'Strings',
      'Hash Table',
      'Dynamic Programming',
      'Tree',
      'Depth-First Search',
      'Binary Search',
      'Greedy',
    ],
    datasets: [
      {
        label: 'Your Skills',
        data: [85, 70, 90, 60, 75, 80, 65, 55],
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(34, 197, 94, 1)',
        pointBorderColor: isDarkMode ? '#2d2d2d' : '#fff',
        pointHoverBackgroundColor: isDarkMode ? '#2d2d2d' : '#fff',
        pointHoverBorderColor: 'rgba(34, 197, 94, 1)',
      },
      {
        label: 'Average LeetCoder',
        data: [60, 65, 70, 50, 60, 55, 50, 45],
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(99, 102, 241, 1)',
        pointBorderColor: isDarkMode ? '#2d2d2d' : '#fff',
        pointHoverBackgroundColor: isDarkMode ? '#2d2d2d' : '#fff',
        pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          backdropColor: 'transparent',
          color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
        },
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
        },
        pointLabels: {
          font: {
            size: 12,
          },
          color: isDarkMode ? '#e5e7eb' : '#374151',
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
          },
          color: isDarkMode ? '#e5e7eb' : '#374151',
        },
      },
      tooltip: {
        backgroundColor: isDarkMode ? 'rgba(30, 30, 30, 0.8)' : 'rgba(0, 0, 0, 0.7)',
        titleFont: {
          size: 14,
        },
        titleColor: isDarkMode ? '#e5e7eb' : '#fff',
        bodyFont: {
          size: 12,
        },
        bodyColor: isDarkMode ? '#e5e7eb' : '#fff',
        padding: 10,
        displayColors: true,
      },
    },
    elements: {
      line: {
        tension: 0.2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md dark:shadow-lg p-5 transition-colors duration-200">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
        Skill Proficiency
      </h3>
      <div className="h-80">
        <Radar data={data} options={options} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
        This visualization compares your skills across different problem categories
        compared to the average LeetCode user.
      </p>
    </div>
  );
};

export default SkillRadar; 