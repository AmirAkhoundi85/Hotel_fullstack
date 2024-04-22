import axios from "axios";
import React, { useEffect, useState } from "react";
import HotelCard from "../components/hotels/HotelCard";
import { useLocation } from "react-router-dom";
import Layout from "../components/layout";

const SearchPage = () => {
//   const searchKey = useParams().search;

  
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchKey = params.get("searchKey");

  const [hotelSearched, setHotelSearched] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `http://localhost:5001/api/hotels?search=${searchKey}`
      );
      console.log(res.data);
      setHotelSearched(res.data);
    };

    getData();
  }, [searchKey]);

  return (
    <Layout>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {hotelSearched.length ? (
          hotelSearched.map((item) => <HotelCard key={item.id} {...item} />)
        ) : (
          <div className=""> No any result</div>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;
