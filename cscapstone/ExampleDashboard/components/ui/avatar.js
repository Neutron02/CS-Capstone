import React from "react";

export const Avatar = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-gray-400 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
