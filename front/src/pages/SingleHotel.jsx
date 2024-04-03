import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleHotel = () => {
     const idHotel = useParams().id;
     const [hotelInfo, setHotelInfo] = useState({
       name: "",
       description: "",
       hotels: [],
       id: "",
     });
     useEffect(() => {
       const getHotel = async () => {
         const res = await axios.get(
           `http://localhost:5001/api/hotels/${idHotel}`
         );
         setHotelInfo(res.data);
       };

       getHotel();
     }, []);
  return (
    <div className="min-vh-100 container">
      <div>
        <h1 className="text-center">{hotelInfo.name}</h1>
        <h3>{hotelInfo.country}</h3>
        <p>{hotelInfo.address}</p>
        <p>{hotelInfo.phoneNumber}</p>
        {/* <p>{hotelInfo.rate}</p>
        <p>{hotelInfo.description}</p> */}
      </div>
    </div>
  );
}

export default SingleHotel