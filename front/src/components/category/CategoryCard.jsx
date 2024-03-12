import React from 'react'
import { Link } from 'react-router-dom';

const CategoryCard = ({id,name, description}) => {
  return (
    <div className="col">
      <Link to={`/category/${id}`} className="p-4 bg-white rounded shadow text-decoration-none">
        <h2 className="font-semibold text-gray-700">{name}</h2>
        <p className="text-muted">{description} </p>
      </Link>
    </div>
  );
}

export default CategoryCard