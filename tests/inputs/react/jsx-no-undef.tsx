import React from 'react';

export const Component = () => {
  return (
    <div>
      {/* This should trigger the error */}
      <UndefinedComponent />
      {/* This should be fine */}
      <div>Content</div>
    </div>
  );
};
