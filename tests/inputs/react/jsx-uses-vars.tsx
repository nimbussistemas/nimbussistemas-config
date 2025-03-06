import React from 'react';

const Hello = require('./Hello');

export const Component = () => {
  const unusedVar = 'test';
  const usedVar = 'test';

  return <div>{usedVar}</div>;
};
