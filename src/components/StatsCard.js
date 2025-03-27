import React from 'react';

const StatsCard = ({ title, value, icon, color, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-3">
        <div className={`text-${color} text-2xl mr-3`}>{icon}</div>
        <h3 className="text-gray-700 font-semibold">{title}</h3>
      </div>
      <div className="mb-2">
        <span className="text-3xl font-bold text-gray-800">{value}</span>
      </div>
      {description && <p className="text-gray-500 text-sm">{description}</p>}
    </div>
  );
};

export default StatsCard; 