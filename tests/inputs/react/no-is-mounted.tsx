import React from 'react';

export class Component extends React.Component {
  componentDidMount() {
    // This should trigger the error
    if (this.isMounted()) {
      console.log('Component is mounted');
    }
  }

  render() {
    return <div>Content</div>;
  }
}
