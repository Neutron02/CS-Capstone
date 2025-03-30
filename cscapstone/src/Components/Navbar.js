import React from 'react';

const Navbar = ({
  onAddWant,
  onAddHave,
  disableModifications,
  toggleModificationMode,
  simulateOfferSuccess,
  onToggleSimulationOfferSuccess
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">Marketplace</h1>
      <div className="space-x-2">
        <button className="bg-blue-500 px-4 py-2 rounded" onClick={onAddWant} disabled={disableModifications}>
          Add Want
        </button>
        <button className="bg-green-500 px-4 py-2 rounded" onClick={onAddHave} disabled={disableModifications}>
          Add Have
        </button>
        <button
          className={`px-4 py-2 rounded ${disableModifications ? 'bg-red-500' : 'bg-gray-500'}`}
          onClick={toggleModificationMode}
        >
          {disableModifications ? "Don't Modify My DB (Locked)" : "Allow DB Modifications"}
        </button>
        {/* Simulation toggle for offer clicks */}
        <button 
          className={`px-4 py-2 rounded ${simulateOfferSuccess ? 'bg-green-600' : 'bg-gray-600'}`}
          onClick={onToggleSimulationOfferSuccess}
          disabled={disableModifications}
        >
          {simulateOfferSuccess ? "Offer Sim Success: ON" : "Offer Sim Success: OFF"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;