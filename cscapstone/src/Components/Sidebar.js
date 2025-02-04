import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mockMarketplaceData from "../data/MarketplaceData";


// Task is to implement user selection and navigation through the sidebar
const Sidebar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="w-1/4 bg-gray-100 p-4 border-r border-gray-300 h-screen flex flex-col fixed" data-testid="sidebar">
      <div className="mb-6 text-center">
        <h3 className="text-lg font-semibold">Current User</h3>
        <div className="w-16 h-16 rounded-full bg-gray-400 mx-auto mt-2"></div>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Switch User
        </button>
        {showDropdown && (
          <div className="mt-2 bg-white border border-gray-300 rounded shadow-lg">
            <button
              onClick={() => {
                navigate("/marketplace");
                setShowDropdown(false);
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-200"
            >
              View Marketplace
            </button>
            {mockMarketplaceData.map(user => (
              <button
                key={user.user}
                onClick={() => {
                  navigate(`/user/${user.user}`);
                  setShowDropdown(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-200"
              >
                View User {user.user}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="mt-auto text-center">
        <p className="text-gray-600">Details about the selected user go here.</p>
      </div>
    </div>
  );
}

export default Sidebar;
