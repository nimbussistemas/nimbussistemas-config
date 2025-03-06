import React, { useState } from 'react';

export const Component = () => {
  const [state, setState] = useState({ count: 0 });

  const handleClick = () => {
    // This should trigger the error
    state.count += 1;
  };

  return <button onClick={handleClick}>Count: {state.count}</button>;
};
