import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const url = this.props.flat.imageUrl;
    const divStyle = {
      backgroundImage: ['linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))', `url(${url})`]
    };
    return (
      <div className="card" style={divStyle} onClick={this.handleClick}>
        <div className="card-category">{`${this.props.flat.price} EUR`}</div>
        <div className="card-description">{this.props.flat.name}</div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
};

export default Flat;
