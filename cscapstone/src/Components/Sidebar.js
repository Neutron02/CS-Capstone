import React from 'react';

const Sidebar = ({ currentUser, users, onUserSelect }) => {
  return (
    <div
      className="w-1/4 bg-gray-100 p-4 border-r border-gray-300 h-screen flex flex-col fixed"
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
      <div className="mt-auto text-center">
        <p className="text-gray-600">User details and additional info go here.</p>
      </div>
    </div>
  );
};

export default Sidebar;
