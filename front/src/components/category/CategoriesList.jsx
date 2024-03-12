import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import axios from "axios";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("http://localhost:5001/api/categories");
      setCategories(res.data);
    };
    getCategories();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Categories</h2>
      <div className="row row-cols-1 row-cols-md-4 row-cols-lg-6">
        {categories.map((item) => (
          <CategoryCard
            key={item.id}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
