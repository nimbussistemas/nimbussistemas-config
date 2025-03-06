import React from 'react';

export class Component extends React.Component {
  // This should trigger the error
  UNSAFE_componentWillMount() {
    console.log('Will mount');
  }

  render() {
    return <div>Content</div>;
  }
}
