// src/app/page.tsx

import React from 'react';
import { Hotel } from '@/types/hotel';
import { fetchHotelData } from '@/utils/api';
import Link from 'next/link';
import styles from './page.module.css';

const HomePage = async () => {
  const hotelId = 'STF840'; // Replace with the hotel ID you want to display
  const hotel = await fetchHotelData(hotelId);

  if (!hotel) {
    return (
      <main className={styles.main}>
        <h1>Hotel Not Found</h1>
        <p>The hotel data could not be retrieved.</p>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <h1>{hotel.title}</h1>
      <div className={styles.hotelItem}>
        <img src={hotel.images[0]} alt={hotel.title} className={styles.hotelImage} />
        <div className={styles.hotelInfo}>
          <p>{hotel.description}</p>
          <Link
            href={`/hotel-details/${hotel.slug}/${hotel.hotelID}`}
            className={styles.viewDetailsButton}
          >
            View Details
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
