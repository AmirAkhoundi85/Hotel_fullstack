import React from "react";
import { Link } from "react-router-dom";

const HotelCard = ({ id, name, images, city }) => {
  return (
    <div class="col">
      <div class="card hotel-card postion-relative" id={id}>
        <Link to={`/hotel/${id}`} className="text-decoration-none d-block h-100">
          <img src={images[0]} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{city}.</p>
          </div>
          <div class="card-footer position-absolute bottom-0 w-100 text-center">
            <small class="text-body-secondary">View Details</small>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
