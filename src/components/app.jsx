import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flatlist';
import Marker from './marker';

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

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.props.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCgylbiZKrnByydYJQMMzXnuAJsrlH5-t8' }}
            defaultCenter={this.center()}
            defaultZoom={12}
          >
            <Marker
                lat={this.state.selectedFlat.lat}
                lng={this.state.selectedFlat.lng}
                text={this.state.selectedFlat.name}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
