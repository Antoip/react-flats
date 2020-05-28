import React, { Component } from 'react';

import Flat from './flat';

class FlatList extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedFlatLat: 48.884211 };
  }

  render() {
    return (
      <div className={"flat-list"}>
        {this.props.flats.map((flat) => {
          console.log(flat);
          return <Flat flat={flat} key={flat.lat} className={flat.lat === this.state.selectedFlatLat ? "active" : null} onClick={handleClick} />;
        })}
      </div>);
  }
}

export default FlatList;
