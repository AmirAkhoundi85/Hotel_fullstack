import React from "react";
import { Link } from "react-router-dom";

const HotelCard = ({ id, name, image, city }) => {
  return (
    <div class="col">
      <div class="card h-100" id={id}>
        <Link to={`/hotel/${id}`} className="text-decoration-none">
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{city}.</p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">View Details</small>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
