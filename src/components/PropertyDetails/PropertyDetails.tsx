"use client";

import React, { useState } from "react";
import styles from "./PropertyDetails.module.css";
import ShareModal from "@/components/Modals/ShareModal";

export default function PropertyDetails({ hotel }: { hotel: any }) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleShareClick = () => setIsShareModalOpen(true);
  const handleCloseModal = () => setIsShareModalOpen(false);

  return (
    <div className={styles.propertyDetails}>
      {/* Navigation Buttons */}
      <div className={styles.buttons}>
        <a href="#" className={styles.backArrow}>
          ← See all properties
        </a>
        <div className={styles.rightButtons}>
          <button className={styles.share} onClick={handleShareClick}>
            Share <i className="fa-solid fa-arrow-up-from-bracket"></i>
          </button>
          <button className={styles.save}>
            Save <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>

      {/* Hotel Title and Description */}
      <h1 className={styles.propertyTitle}>{hotel.title}</h1>
      <p className={styles.description}>{hotel.description}</p>

      {/* Gallery Section */}
      <div className={styles.gallerySection}>
        <img src={hotel.images[0]} alt={hotel.title} className={styles.mainImage} />
        <div className={styles.smallImages}>
          {hotel.images.map((img: string, index: number) => (
            <img key={index} src={img} alt={`Thumbnail ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Amenities Section */}
      <div className={styles.features}>
        <h3>Amenities:</h3>
        <ul>
          {hotel.amenities.map((amenity: string, index: number) => (
            <li key={index} className={styles.feature}>
              <i className="fa-solid fa-check"></i> {amenity}
            </li>
          ))}
        </ul>
      </div>

      {/* Rooms Section */}
      <div className={styles.roomsSection}>
        <h3>Available Rooms</h3>
        {hotel.rooms.map((room: any, index: number) => (
          <div key={index} className={styles.roomCard}>
            <img src={room.roomImage[0]} alt={room.roomTitle} className={styles.roomImage} />
            <div className={styles.roomDetails}>
              <h4>{room.roomTitle}</h4>
              <p>Bedrooms: {room.bedroomCount}</p>
              <p>Bathrooms: {room.bathroomCount}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={handleCloseModal}
        property={{
          title: hotel.title,
          location: hotel.address,
          rating: hotel.guestCount,
          image: hotel.images[0],
        }}
      />
    </div>
  );
}
