import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HotelsList from '../components/hotels/HotelsList';
import Layout from '../components/layout';

const SingleCategory = () => {
   

  return (
    <Layout>
      <HotelsList />
    </Layout>
  );
}

export default SingleCategory