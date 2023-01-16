import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, link, description }) => {
  return (
    <div className="card w-25 m-2">
      <div className="card-body">
        <h5 className="card-title">Planet: {title}</h5>
        <p className="card-text">{description}</p>
        <Link className="btn btn-info" to={link}>
          View more
        </Link>
      </div>
    </div>
  );
};

export default Card;
