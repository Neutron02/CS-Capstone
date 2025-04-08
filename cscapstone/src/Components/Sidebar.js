import React, { useState } from 'react';
import RatingHistoryChart from './RatingHistoryChart';

const Sidebar = ({
  currentUser,
  users,
  onUserSelect,
  refreshCounter,
  disputeResolution,
  setDisputeResolution,
  confidenceAccuracy,
  setConfidenceAccuracy,
  onReset
}) => {
  // Local state for the reset slider value.
  const [resetValue, setResetValue] = useState(50);

  return (
    <div
      className="w-full bg-gray-100 p-4 border-r border-gray-300 h-screen flex flex-col"
      style={{ zIndex: 10 }}
      data-testid="sidebar"
    >
      <div className="mb-6 text-center">
        <h3 className="text-lg font-semibold">Current User: {currentUser.user_id}</h3>
        <div className="w-16 h-16 rounded-full bg-gray-400 mx-auto mt-2"></div>
        <div className="mt-4">
          <select 
            value={currentUser.user_id} 
            onChange={onUserSelect}
            className="p-2 border border-gray-300 rounded"
          >
            {users.map((user) => (
              <option key={user.user_id} value={user.user_id}>
                User {user.user_id} (Rating: {user.rating})
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <RatingHistoryChart userId={currentUser.user_id} refreshCounter={refreshCounter} />

      {/* Advanced Parameters */}
      <div className="mt-4">
        <h4 className="text-md font-semibold mb-1">Advanced Settings</h4>
        <label className="block text-sm mb-1">
          Dispute Resolution: {disputeResolution}
        </label>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={disputeResolution}
          onChange={(e) => setDisputeResolution(e.target.value)}
          className="w-full mb-2"
        />
        <label className="block text-sm mb-1">
          Confidence Accuracy: {confidenceAccuracy}
        </label>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={confidenceAccuracy}
          onChange={(e) => setConfidenceAccuracy(e.target.value)}
          className="w-full mb-2"
        />
        {/* Reset Slider */}
        <label className="block text-sm mb-1">
          Reset Rating Value: {resetValue}
        </label>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={resetValue}
          onChange={(e) => setResetValue(e.target.value)}
          className="w-full mb-2"
        />
        <button
          onClick={() => onReset(resetValue)}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
        >
          Reset User
        </button>
      </div>

      <div className="mt-auto text-center">
        <p className="text-gray-600">User details and additional info go here.</p>
      </div>
    </div>
  );
};

export default Sidebar;