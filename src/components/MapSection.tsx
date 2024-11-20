// src/components/MapSection.tsx

import React from 'react';

interface MapSectionProps {
  latitude: number;
  longitude: number;
  address: string;
}

const MapSection = ({ latitude, longitude, address }: MapSectionProps) => {
  const mapSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <section>
      <h2>Explore the Area</h2>
      <div>
        <iframe src={mapSrc} width="600" height="450" allowFullScreen loading="lazy"></iframe>
        <p>{address}</p>
      </div>
    </section>
  );
};

export default MapSection;
