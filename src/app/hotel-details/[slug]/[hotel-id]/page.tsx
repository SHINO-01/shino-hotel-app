// src/app/hotel-details/[slug]/[hotelId]/page.tsx

import React from 'react';
import { Hotel } from '@/types/hotel';
import { fetchHotelData } from '@/utils/api';
import HotelDetails from './HotelDetails';

interface HotelPageProps {
  params: {
    hotelId: string;
    slug: string;
  };
}

const HotelPage = async ({ params }: HotelPageProps) => {
  const { hotelId } = params;

  const hotel = await fetchHotelData(hotelId);

  if (!hotel) {
    return (
      <main>
        <h1>Hotel Not Found</h1>
        <p>The hotel data could not be retrieved.</p>
      </main>
    );
  }

  return <HotelDetails hotel={hotel} />;
};

export default HotelPage;
