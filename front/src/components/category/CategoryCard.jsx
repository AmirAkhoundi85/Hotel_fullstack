import React from 'react'

const CategoryCard = ({title, description}) => {
  return (
    <div className='col'>
      <div className="p-4 bg-white rounded shadow">
        <h2 className="font-semibold text-gray-700">{title}</h2>
        <p className="text-muted">{description} </p>
      </div>
    </div>
  );
}

export default CategoryCard