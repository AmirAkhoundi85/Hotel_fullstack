import React from 'react'
// import { Route, Routes } from "../../node_modules/react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Category from '../pages/Category';



const RoutesMap = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  );
}

export default RoutesMap