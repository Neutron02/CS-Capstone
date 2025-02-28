import React, { useState } from 'react';
import Popup from 'reactjs-popup';

const Form = ({ type, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  // Handles input changes in the form
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Called when the user submits the form.
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${type === "request" ? "Request" : "Offer"} submitted: ${formData.title}`);
  };

  return (
    <Popup open={true} modal closeOnDocumentClick onClose={onClose}>
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full relative">
        {/* Close (X) Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          {type === "request" ? "New Request" : "New Offer"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full p-3 border rounded"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            className="w-full p-3 border rounded h-32"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full p-3 border rounded"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Submit {type === "request" ? "Request" : "Offer"}
          </button>
        </form>
      </div>
    </Popup>
  );
};

export default Form;
