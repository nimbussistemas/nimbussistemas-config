import React from 'react';

export const Component = () => {
  return (
    <div
      // This should trigger the error
      unknownprop="value"
      // This should be fine
      className="test"
    >
      Content
    </div>
  );
};
