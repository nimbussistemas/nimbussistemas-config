import React from 'react';

export class Component extends React.Component {
  render() {
    return (
      <div>
        {/* This should trigger the error */}
        <div ref="myRef">Content</div>
        {/* This should be fine */}
        <div ref={this.myRef}>Content</div>
      </div>
    );
  }
}
