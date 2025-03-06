import React, { useState, useEffect } from 'react';

export const Component = ({ shouldUseEffect }: { shouldUseEffect: boolean }) => {
  const [count, setCount] = useState(0);

  if (shouldUseEffect) {
    useEffect(() => {
      console.log('Count changed:', count);
    }, [count]);
  }

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
