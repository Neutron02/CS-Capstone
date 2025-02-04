import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MarketplaceCard from "./MarketplaceCard";
import mockMarketplaceData from "../data/MarketplaceData";

// Task is to display a user's specific marketplace view 
const UserView = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const user = mockMarketplaceData.find(user => user.user === userId);

  // I worked on this but I couldn't find why this didn't work, so this needs to get fix
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen ml-[25%] text-center">
        <div>
          <h2 className="text-2xl font-bold text-red-500">User not found!</h2>
          <button
            onClick={() => navigate("/marketplace")}
            className="mt-4 px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  //Shows User's Page
  //I just copied and pasted the card from the marketplacegrid so the size may need to get changed
  return (
    <div className="ml-[25%] p-6 w-[75%]">
      {/* Header Section: User Page & Back Button */}
      <div className="flex flex-col items-center text-center mb-6">
        <button
            onClick={() => navigate("/marketplace")}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
        >
          Back to Marketplace
        </button>
        <h2 className="text-3xl font-bold mt-4">User {userId}'s Page</h2>
      </div>

      {/* Want Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-green-600 mb-4">Want</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start w-full ml-6 mr-6 mt-6 mb-6" data-testid="marketplace-grid">
        {user.want.length > 0 ? (
            user.want.map((item, index) => (
              <MarketplaceCard
                key={index}
                user={userId}
                title={item.title}
                description={item.description}
                price={item.price}
                rating={user.rating}
                want={true}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">No items in Want list.</p>
          )}
        </div>
      </div>

      {/* Have Section */}
      <div>
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Have</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start w-full ml-6 mr-6 mt-6 mb-6" data-testid="marketplace-grid">
        {user.have.length > 0 ? (
            user.have.map((item, index) => (
              <MarketplaceCard
                key={index}
                user={userId}
                title={item.title}
                description={item.description}
                price={item.price}
                rating={user.rating}
                want={false}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">No items in Have list.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserView;
