import React from 'react';

export const Component = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    // This should trigger the error
    ReactDOM.findDOMNode(ref.current);
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
    >
      Content
    </div>
  );
};
