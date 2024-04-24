import React from 'react'
import { Link } from 'react-router-dom';

const CategoryCard = ({id,image, name, description}) => {
  return (
    <div className="col">
      <Link
        to={`/category/${id}`}
        className="category-card bg-white rounded shadow text-decoration-none d-block"
      >
        <img src={image} alt="" className="w-100" />
        <div className="p-4">
          <h4 className="font-semibold text-gray-700 ">{name}</h4>
          <p className="text-muted">{description} </p>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard