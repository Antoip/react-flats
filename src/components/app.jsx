import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
      />,
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
          />
        </GoogleMapReact>
      </div>
      );
  }
}

export default App;
