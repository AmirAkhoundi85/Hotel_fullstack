import React from "react";
import { Link } from "react-router-dom";

const HotelCard = ({ id, name, images, city }) => {
  return (
    <div className="col">
      <div className="card hotel-card postion-relative" id={id}>
        <Link
          to={`/hotel/${id}`}
          className="text-decoration-none d-block h-100"
        >
          <img src={images[0]} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{city}.</p>
          </div>
          <div className="card-footer position-absolute bottom-0 w-100 text-center">
            <small className="text-body-secondary">View Details</small>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
