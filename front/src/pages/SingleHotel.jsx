import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleHotel = () => {
     const idHotel = useParams().id;
     const [hotelInfo, setHotelInfo] = useState({
       id: "",
       name: "",
       description: "",
       images: [],
       address: "",
       phoneNumber: "",
       city: "",
       state: "",
       country: "",
       rate: "",
       price: "",
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
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
          {hotelInfo.images.map((item, index) => (
            <div key={index + 1} className="col">
              <img src={item} alt="hotel gallery" className="w-100" />
            </div>
          ))}
        </div>
        <h3>{hotelInfo.country}</h3>
        <p>{hotelInfo.address}</p>
        <p>{hotelInfo.phoneNumber}</p>
        <p>{hotelInfo.rate}</p>
        <p>{hotelInfo.description}</p>
      </div>
    </div>
  );
}

export default SingleHotel

// "images": [
//             "http://localhost:5001/images/hotels/side-lohja1.webp",
//             "http://localhost:5001/images/2.webp"
//         ]

//  "image": "http://localhost:5001/images/categories/cabins.webp",
            
        