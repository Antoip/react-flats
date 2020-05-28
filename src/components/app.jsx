import React, { Component } from 'react';

import FlatList from './flatlist';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlatLat: 48.884211
    };
  }

  render() {
    return (
      <FlatList flats={this.props.flats} selected />);
  }
}

export default App;
