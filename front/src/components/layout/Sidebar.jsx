import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Sidebar = () => {
  const [topRateHotels, setTopRateHotels] = useState([]);
  const [lowPiceHotels, setLowPiceHotels] = useState([]);

  useEffect(() => {
    const getDataRate = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5001/api/hotels?sort=rate&limit=5"
        );
        setTopRateHotels(res.data);
      } catch (error) {}
    };
    const getDataPrice = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5001/api/hotels?sort=price&limit=5"
        );
        setLowPiceHotels(res.data);
      } catch (error) {}
    };
    getDataRate();
    getDataPrice();
  }, []);

  return (
    <div className="p-4 shadow-lg rounded">
      <h4>Top Rate Hotels</h4>
      <ul className="top-rate-hotels mt-4">
        {topRateHotels.map((item) => (
          <li className="mb-2" key={item.id}>
            <Link to={`/hotel/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <h4>Low Price Hotels</h4>
      <ul className="top-rate-hotels mt-4">
        {lowPiceHotels.map((item) => (
          <li className="mb-2" key={item.id}>
            <Link to={`/hotel/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
