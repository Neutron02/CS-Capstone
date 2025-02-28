import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const Navbar = () => {
  const [formType, setFormType] = useState(null);

  const handleClose = () => {
    setFormType(null);
  };
  
  return (
    <div data-testid="navbar">
      <nav className="fixed top-0 w-full bg-white shadow-md z-10">
        <div className="container mx-auto py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            <Link to="/" onClick={handleClose}>
              We Find It
            </Link>
          </div>
          <ul className="flex space-x-10 list-none">
            <li>
              <button
                onClick={() => setFormType("request")}
                className="text-gray-600 font-bold hover:text-blue-600 transition-colors duration-200"
              >
                REQUEST
              </button>
            </li>
            <li>
              <button
                onClick={() => setFormType("offer")}
                className="text-gray-600 font-bold hover:text-blue-600 transition-colors duration-200"
              >
                OFFER
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {formType && (
        <Form type={formType} onClose={handleClose} />
      )}
    </div>
  );
};

export default Navbar;