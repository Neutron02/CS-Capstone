import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-100 p-4 border-r border-gray-300 h-screen flex flex-col" data-testid="sidebar">
      <div className="mb-6 text-center">
        <h3 className="text-lg font-semibold">Current User</h3>
        <div className="w-16 h-16 rounded-full bg-gray-400 mx-auto mt-2"></div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Switch User</button>
      </div>
      <div className="mt-auto text-center">
        <p className="text-gray-600">Details about the selected user go here.</p>
      </div>
    </div>
  );
}

export default Sidebar;
