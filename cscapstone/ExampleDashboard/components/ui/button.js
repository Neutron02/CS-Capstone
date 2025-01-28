import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-semibold rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
