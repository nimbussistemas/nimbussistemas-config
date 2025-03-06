import React from 'react';

export const Component = () => {
  return (
    <div
      className="first"
      className="second" // This should trigger the error
    >
      Content
    </div>
  );
};
