import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, link, description }) => {
  return (
    <div class="card w-50">
      <div class="card-body">
        <h5 class="card-title">Planet: {title}</h5>
        <p class="card-text">{description}</p>
        <Link className="btn btn-primary" to={link}>
          View more
        </Link>
      </div>
    </div>
  );
};

export default Card;
