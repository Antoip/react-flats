import React, { Component } from 'react';

import Flat from './flat';

class FlatList extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    return (
      <div className="flat-list">
        {this.props.flats.map((flat) => {
          return <Flat flat={flat} />;
        })}
      </div>);
  }
}

export default FlatList;
