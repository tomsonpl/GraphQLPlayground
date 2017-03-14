import React from 'react';
import { Link } from 'react-router';

const ImageCard = ({ cardTitle, cardStyle, content, linkTo, linkDescription }) => {

  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image" style={cardStyle} >
          <span className="card-title">{cardTitle}</span>
        </div>
        <div className="card-content">
          <p>{content}</p>
        </div>
        <div className="card-action">
          <Link to={linkTo}>{linkDescription}</Link>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
