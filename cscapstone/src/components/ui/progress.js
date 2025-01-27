import React from "react";

export const Progress = ({ value = 0, className = "", ...props }) => {
  return (
    <div className={`relative bg-gray-200 ${className}`} {...props}>
      <div
        className="bg-blue-500 h-full"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
