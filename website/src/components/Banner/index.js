import React from 'react';

class Banner extends React.Component {

  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

export default Banner;