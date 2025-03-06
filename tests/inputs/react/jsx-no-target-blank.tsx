import React from 'react';

export const Component = () => {
  return (
    <a
      href="https://example.com"
      target="_blank" // This should trigger the error
    >
      Link
    </a>
  );
};
