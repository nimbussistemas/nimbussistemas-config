import React from 'react';

export const Component = () => {
  // This should trigger the error
  React.createClass({
    render() {
      return <div>Content</div>;
    },
  });

  return <div>Content</div>;
};
