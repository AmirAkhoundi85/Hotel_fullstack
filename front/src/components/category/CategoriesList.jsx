import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard';
import axios  from "axios";

const CategoriesList = () => {
    const [categories, setCategories] = useState([])
//    const categories = [
//      {
//        id: 1,
//        title: "Design",
//        description: "des 1",
//      },
//      {
//        id: 2,
//        title: "Lux",
//        description: "des 2",
//      },
//    ];
   useEffect(() => {
    const  getCategories = async () => {
       const res= await axios.get("http://localhost:5001/categories")
       setCategories(res.data)
    }
      getCategories()

   }, [])
   
  return (
    <div className="container">
      <h2 className="mb-4">Categories</h2>
      <div className="row row-cols-1 row-cols-md-4 row-cols-lg-6">
        {categories.map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoriesList