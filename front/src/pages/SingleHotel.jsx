import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import Layout from "../components/layout";

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
  const [rate, setRate] = useState([]);

  const manageRate = (rate) => {
    const rateArray = [];
    for (let i = 0; i < rate; i++) {
      rateArray.push(1);
    }
    for (let i = 0; i < 10 - rate; i++) {
      rateArray.push(0);
    }
    return rateArray;
  };
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getHotel = async () => {
      const res = await axios.get(
        `http://localhost:5001/api/hotels/${idHotel}`
      );
      setHotelInfo(res.data);
      setRate(manageRate(res.data.rate));

      const imagesData = res.data.images.map((image) => ({
        original: image,
        thumbnail: image,
      }));
      setImages(imagesData);
    };

    getHotel();
  }, [idHotel]);

  return (
    <Layout>
      <div>
        <h1 className="text-center">{hotelInfo.name}</h1>
        <div className="row row-cols-1 row-cols-md-2 justify-content-center">
          <div className="col">
            <ImageGallery items={images} />
          </div>
        </div>
        <h3>{hotelInfo.country}</h3>
        <p>
          <strong>City:</strong> {hotelInfo.address}
        </p>
        <p>{hotelInfo.phoneNumber}</p>
        <p>
          <strong>rate:</strong>
          <span className="text-warning">
            {rate.map((item) =>
              item ? (
                <i class="bi bi-star-fill"></i>
              ) : (
                <i class="bi bi-star"></i>
              )
            )}
          </span>
        </p>
        <p>{hotelInfo.description}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          alias officia! Recusandae tenetur aliquid ea quos sunt. Perspiciatis
          quod ratione sint, labore possimus quia, dolorum asperiores odio iste,
          nihil vel!4 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Nesciunt cumque, et distinctio Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Sit, impedit. Repellat, incidunt id nemo architecto,
          exercitationem quam, ullam ea fuga adipisci fugiat nesciunt. Ex
          quisquam architecto nisi saepe corporis aspernatur. est atque totam
          ducimus error optio voluptatem voluptate animi quo quas rem saepe ab
          voluptatibus suscipit a dolorum.
        </p>
      </div>
    </Layout>
  );
};

export default SingleHotel;
