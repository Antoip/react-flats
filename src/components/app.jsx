import React, { Component } from 'react';

import FlatList from './flatlist';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: null
    };
  }

  render() {
    return (
      <FlatList flats={this.props.flats} />);
  }
}

export default App;
