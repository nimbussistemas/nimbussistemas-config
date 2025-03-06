import React, { useState, useEffect } from 'react';

export const Component = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    setCount(count + step);
  }, [count]);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setStep(step + 1)}>Increase Step</button>
    </div>
  );
};
