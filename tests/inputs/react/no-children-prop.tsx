import React from 'react';

const ChildComponent = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const Component = () => {
  return (
    <ChildComponent children={<span>Content</span>} /> // This should trigger the error
  );
};
