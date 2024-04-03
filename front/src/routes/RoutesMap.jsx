import React from 'react'
// import { Route, Routes } from "../../node_modules/react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import SingleCategory from '../pages/SingleCategory';
import SingleHotel from '../pages/SingleHotel';




const RoutesMap = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<SingleCategory />} />
      <Route path="/hotel/:id" element={<SingleHotel />} />
    </Routes>
  );
}

export default RoutesMap