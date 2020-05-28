import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.selectFlat(this.props.index);
  }

  render () {
    const url = this.props.flat.imageUrl;
    const divStyle = {
      backgroundImage: ['linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))', `url(${url})`]
    };
    return (
      <div className={`card${this.props.selected ? ' active' : ''}`} style={divStyle} onClick={this.handleClick}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description"><h2>{this.props.flat.name}</h2></div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
