import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const HotelsList = () => {
  const idCategory = useParams().id;
  const [category, setCategory] = useState({
    name: "",
    description: "",
    hotels: [],
    id: "",
  });
  useEffect(() => {
    const getCategory = async () => {
      const res = await axios.get(
        `http://localhost:5001/api/categories/${idCategory}`
      );
      setCategory(res.data);
    };
    getCategory();
  }, []);
  return (
    <div>
      <div className="text-center">
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {category.hotels.length ? (
          category.hotels.map((item) => <HotelCard key={item.id} {...item} />)
        ) : (
          <div className=""> No any result</div>
        )}
      </div>
    </div>
  );
};

export default HotelsList;
