import React from 'react';

const Flat = (props) => {
  const url = props.imageUrl;
  return (
    <div className="card" style={`background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${url});`}>
      <div className="card-category">{`${props.price} EUR`}</div>
      <div className="card-description">{props.name}</div>
      <a className="card-link" href={url}></a>
    </div>
  );
};

export default Flat;
