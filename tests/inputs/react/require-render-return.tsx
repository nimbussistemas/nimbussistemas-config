import React from 'react';

export class Component extends React.Component {
  render() {
    // This should trigger the error
    console.log('No return');
  }
}
