// src/app/hotel-details/[slug]/[hotelId]/HotelDetails.tsx

'use client';

import React from 'react';
import { Hotel } from '@/types/hotel';
import Gallery from '@/components/Gallery';
import Amenities from '@/components/Amenities';
import MapSection from '@/components/MapSection';
import BookingCard from '@/components/BookingCard';
import styles from './HotelDetails.module.css';

interface HotelDetailsProps {
  hotel: Hotel;
}

const HotelDetails = ({ hotel }: HotelDetailsProps) => {
  return (
    <main className={styles.hotelDetails}>
      <div className={styles.content}>
        <Gallery images={hotel.images} />
        <h1 className={styles.title}>{hotel.title}</h1>
        <p className={styles.description}>{hotel.description}</p>
        <Amenities amenities={hotel.amenities} />
        <MapSection
          latitude={hotel.latitude}
          longitude={hotel.longitude}
          address={hotel.address}
        />
      </div>
      <div className={styles.bookingCardContainer}>
        <BookingCard hotel={hotel} />
      </div>
    </main>
  );
};

export default HotelDetails;
