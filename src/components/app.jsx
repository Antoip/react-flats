import React, { Component } from 'react';

import FlatList from './flatlist';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: this.props.flats[0]
    };
  }

  selectFlat = (index) => {
    this.setState({selectedFlat: this.props.flats[index]});
  }

  render() {
    return (
      <FlatList
        flats={this.props.flats}
        selectedFlat={this.state.selectedFlat}
        selectFlat={this.selectFlat}
      />
      );
  }
}

export default App;
