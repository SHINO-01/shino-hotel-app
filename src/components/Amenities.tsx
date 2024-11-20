// src/components/Amenities.tsx

import React from 'react';

interface AmenitiesProps {
  amenities: string[];
}

const Amenities = ({ amenities }: AmenitiesProps) => {
  return (
    <section>
      <h2>Popular Amenities</h2>
      <ul>
        {amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
    </section>
  );
};

export default Amenities;
